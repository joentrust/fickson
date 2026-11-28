import type { CSSProperties } from "react";
import { PRINCIPLES } from "@/lib/content";

type PrinciplesProps = { style?: CSSProperties };

export function Principles({ style }: PrinciplesProps) {
  return (
    <section className="principles" style={style}>
      {PRINCIPLES.map((principle) => (
        <div key={principle.title}>
          <h3>{principle.title}</h3>
          <p>{principle.detail}</p>
        </div>
      ))}
    </section>
  );
}
