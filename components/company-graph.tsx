type Edge = { x1: number; y1: number; x2: number; y2: number; live: boolean };
type Node = { cx: number; cy: number; r: number; label: string; built: boolean };
type EdgeLabel = { x: number; y: number; text: string };

const EDGES: Edge[] = [
  { x1: 168, y1: 130, x2: 300, y2: 62, live: true },
  { x1: 168, y1: 140, x2: 300, y2: 200, live: false },
  { x1: 430, y1: 70, x2: 560, y2: 118, live: false },
  { x1: 430, y1: 195, x2: 560, y2: 148, live: false },
  { x1: 365, y1: 180, x2: 365, y2: 92, live: false },
];

const NODES: Node[] = [
  { cx: 110, cy: 135, r: 58, label: "Luwawa", built: true },
  { cx: 365, cy: 62, r: 44, label: "Kazuni", built: true },
  { cx: 365, cy: 205, r: 44, label: "Chia", built: true },
  { cx: 618, cy: 133, r: 50, label: "Viphya", built: false },
];

const LABELS: EdgeLabel[] = [
  { x: 176, y: 72, text: "email, live" },
  { x: 214, y: 196, text: "billing" },
  { x: 474, y: 78, text: "email" },
  { x: 474, y: 196, text: "billing" },
  { x: 374, y: 140, text: "billing" },
];

export function CompanyGraph() {
  return (
    <div className="fit">
      <svg viewBox="0 0 720 260" role="img" aria-label="How the companies connect">
        <defs>
          <marker
            id="ah"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto"
          >
            <path d="M0 0 L10 5 L0 10z" fill="var(--ink-soft)" />
          </marker>
        </defs>
        <g fontFamily="var(--font)" fontSize="15" fill="var(--ink)">
          {EDGES.map((edge) => (
            <line
              key={`${edge.x1}-${edge.y1}`}
              x1={edge.x1}
              y1={edge.y1}
              x2={edge.x2}
              y2={edge.y2}
              stroke="var(--ink-soft)"
              strokeWidth="2"
              strokeDasharray={edge.live ? undefined : "6 6"}
              markerEnd="url(#ah)"
            />
          ))}
          {NODES.map((node) => (
            <g key={node.label}>
              <circle
                cx={node.cx}
                cy={node.cy}
                r={node.r}
                fill={node.built ? "var(--tech)" : "var(--bg)"}
                stroke={node.built ? undefined : "var(--tech)"}
                strokeWidth={node.built ? undefined : 2}
              />
              <text
                x={node.cx}
                y={node.cy + 5}
                textAnchor="middle"
                fontWeight="600"
                fill={node.built ? "#fff" : "var(--ink)"}
              >
                {node.label}
              </text>
            </g>
          ))}
          <g fontFamily="var(--mono)" fontSize="12" fill="var(--ink-soft)">
            {LABELS.map((label) => (
              <text key={`${label.x}-${label.y}`} x={label.x} y={label.y}>
                {label.text}
              </text>
            ))}
          </g>
        </g>
      </svg>
      <p
        style={{
          fontFamily: "var(--mono)",
          fontSize: 12,
          color: "var(--ink-faint)",
          marginTop: 16,
        }}
      >
        Solid line: live today. Dashed line: planned.
      </p>
    </div>
  );
}
