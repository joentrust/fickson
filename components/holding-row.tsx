import type { Holding } from "@/lib/content";

type HoldingRowProps = { holding: Holding };

export function HoldingRow({ holding }: HoldingRowProps) {
  return (
    <div className="row">
      <span>
        <b>{holding.name}</b>
        <p>{holding.detail}</p>
      </span>
    </div>
  );
}
