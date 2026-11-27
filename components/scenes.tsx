import type { Lane } from "@/lib/content";

function AgriScene() {
  return (
    <svg viewBox="0 0 400 220" aria-hidden="true">
      <rect width="400" height="220" fill="var(--agri-soft)" />
      <g fill="none" stroke="var(--agri)" strokeWidth="3" strokeLinecap="round" opacity="0.9">
        <path d="M-10 200 Q200 120 410 200" />
        <path d="M-10 176 Q200 96 410 176" />
        <path d="M-10 152 Q200 72 410 152" />
        <path d="M-10 128 Q200 48 410 128" />
      </g>
      <circle cx="320" cy="52" r="22" fill="var(--agri)" />
    </svg>
  );
}

const WINDOWS: [number, number, number, number][] = [
  [138, 90, 14, 14],
  [164, 90, 14, 14],
  [190, 90, 10, 14],
  [138, 118, 14, 14],
  [164, 118, 14, 14],
  [56, 128, 12, 12],
  [82, 128, 12, 12],
  [308, 110, 12, 12],
  [334, 110, 12, 12],
  [308, 136, 12, 12],
];

function EstateScene() {
  return (
    <svg viewBox="0 0 400 220" aria-hidden="true">
      <rect width="400" height="220" fill="var(--estate-soft)" />
      <g fill="var(--estate)">
        <rect x="40" y="110" width="70" height="110" />
        <rect x="122" y="70" width="90" height="150" />
        <rect x="224" y="130" width="56" height="90" />
        <rect x="292" y="92" width="70" height="128" />
      </g>
      <g fill="var(--estate-soft)">
        {WINDOWS.map(([x, y, w, h]) => (
          <rect key={`${x}-${y}`} x={x} y={y} width={w} height={h} />
        ))}
      </g>
    </svg>
  );
}

function TechScene() {
  return (
    <svg viewBox="0 0 400 220" aria-hidden="true">
      <rect width="400" height="220" fill="var(--tech-soft)" />
      <g stroke="var(--tech)" strokeWidth="2" opacity="0.55">
        <line x1="80" y1="70" x2="200" y2="110" />
        <line x1="200" y1="110" x2="320" y2="60" />
        <line x1="200" y1="110" x2="140" y2="170" />
        <line x1="200" y1="110" x2="290" y2="165" />
        <line x1="80" y1="70" x2="140" y2="170" />
      </g>
      <g fill="var(--tech)">
        <circle cx="200" cy="110" r="14" />
        <circle cx="80" cy="70" r="8" />
        <circle cx="320" cy="60" r="8" />
        <circle cx="140" cy="170" r="8" />
        <circle cx="290" cy="165" r="8" />
      </g>
    </svg>
  );
}

const SCENES: Record<Lane, () => React.JSX.Element> = {
  agri: AgriScene,
  estate: EstateScene,
  tech: TechScene,
};

type SceneProps = { lane: Lane };

export function Scene({ lane }: SceneProps) {
  const Component = SCENES[lane];
  return <Component />;
}
