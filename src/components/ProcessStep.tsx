import { PenArrow, PenCheck } from "../illustrations/BenchSketches";
import type { LucideIcon } from "lucide-react";
export function ProcessStep({
  step,
  index,
}: {
  step: { title: string; text: string; icon: LucideIcon };
  index: number;
}) {
  return (
    <article className="process-step">
      <div className="step-top">
        <span className="mono">WP-0{index + 1}</span>
        <step.icon size={25} strokeWidth={1.3} aria-hidden="true" />
        {index < 3 && <PenArrow className="step-connector" />}
      </div>
      <h3>
        <span>{step.title}</span>
        {index === 3 && <PenCheck />}
      </h3>
      <p>{step.text}</p>
      <span className="step-number" aria-hidden="true">
        0{index + 1}
      </span>
    </article>
  );
}
