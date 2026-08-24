/* A small closed envelope, purely decorative — the ones drifting upar-neeche
   behind the hero. Not the real Lifafa component: no state, no motion library,
   just paper on a CSS keyframe. */
export default function MiniLifafa({
  paper,
  deep,
  className,
  style,
}: {
  paper: string;
  deep: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg viewBox="0 0 100 130" className={className} style={style} aria-hidden>
      <rect width="100" height="130" rx="4" fill={deep} />
      <polygon points="0,46 100,46 100,130 0,130" fill={paper} />
      <path d="M0,46 L50,88 L100,46" fill="none" stroke="#000" strokeWidth="0.5" opacity="0.16" />
      <polygon points="0,0 100,0 100,19 50,48 0,19" fill={paper} />
      <polygon points="0,0 100,0 100,19 50,48 0,19" fill="#000" opacity="0.12" />
      <circle cx="50" cy="34" r="7" fill="#c42b1c" />
      <circle cx="50" cy="34" r="7" fill="none" stroke="#c9a227" strokeWidth="1" />
      <circle cx="50" cy="108" r="11" fill="#17090e" opacity="0.35" />
      <circle cx="50" cy="108" r="9" fill="#c8c4b4" />
      <circle cx="50" cy="108" r="9" fill="none" stroke="#6f6b5e" strokeWidth="1" />
    </svg>
  );
}
