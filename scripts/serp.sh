#!/usr/bin/env bash
# Real search demand, one SerpAPI call per query.
#
# Google Keyword Planner needs a Google Ads login, which we do not have, and
# its volumes are bucketed so widely they are close to useless for planning.
# People Also Ask is better for this anyway: those are the questions Google has
# measured people actually asking after this search, verbatim.
#
# gl=in and hl=en, because the audience is in India and US results for these
# queries return diaspora and vendor pages instead.
#
#   ./scripts/serp.sh "query"
#   ./scripts/serp.sh --balance
#
# Credits are finite and shared with the bkl3 project. One call per decision.
set -euo pipefail
cd "$(dirname "$0")/.."
set -a; . ~/anusha/bkl3/.env.local; set +a

if [ "${1:-}" = "--balance" ]; then
  curl -s "https://serpapi.com/account?api_key=$SERPAPI_KEY" \
    | python3 -c "import json,sys;print('left:',json.load(sys.stdin).get('total_searches_left'))"
  exit 0
fi

Q="$1"
SLUG=$(echo "$Q" | tr ' ' '-' | tr -cd '[:alnum:]-' | cut -c1-60)
OUT="research/serp/${SLUG}.json"

curl -s -G "https://serpapi.com/search.json" \
  --data-urlencode "q=$Q" --data-urlencode "api_key=$SERPAPI_KEY" \
  --data "engine=google&gl=in&hl=en&num=20" > "$OUT"

python3 - "$OUT" "$Q" <<'PY'
import json,sys
d=json.load(open(sys.argv[1]))
print("="*68); print("Q:", sys.argv[2]); print("="*68)
print("-- WHO RANKS --")
for i,r in enumerate(d.get("organic_results",[])[:8],1):
    print(f"{i:2}. {(r.get('source') or r.get('displayed_link','')):32} {r.get('title','')[:70]}")
print("-- PEOPLE ALSO ASK --")
for x in d.get("related_questions",[])[:10]:
    print("  ?", x.get("question"))
print("-- RELATED SEARCHES --")
for x in d.get("related_searches",[])[:12]:
    print("  >", x.get("query"))
PY
