/* Apply migrations/*.sql over a direct (non-pooled) connection.
   Run: node --env-file=.env.local scripts/migrate.mjs */
import { readFileSync, readdirSync } from "node:fs";
import postgres from "postgres";

// DDL needs the non-pooling URL — the transaction pooler doesn't allow it.
const url = process.env.POSTGRES_URL_NON_POOLING ?? process.env.POSTGRES_URL;
if (!url) {
  console.error("No POSTGRES_URL_NON_POOLING / POSTGRES_URL in the environment.");
  process.exit(1);
}

const sql = postgres(url, { ssl: "require", max: 1, onnotice: () => {} });

for (const f of readdirSync("migrations").filter((f) => f.endsWith(".sql")).sort()) {
  process.stdout.write(`applying ${f} … `);
  await sql.unsafe(readFileSync(`migrations/${f}`, "utf8"));
  console.log("ok");
}

const [{ relrowsecurity }] = await sql`
  select relrowsecurity from pg_class where relname = 'lifafas'`;
const policies = await sql`
  select policyname from pg_policies where tablename = 'lifafas'`;

console.log(`\nRLS enabled: ${relrowsecurity}`);
console.log(`policies defined: ${policies.length} (zero is correct — default deny)`);

await sql.end();
