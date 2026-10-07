import { PenCheck } from "../illustrations/BenchSketches";
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
        {index < 3 && (
          <span className="step-link" aria-hidden="true">
            <svg
              className="step-connector"
              viewBox="0 0 180 28"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M3 19c32 7 54-15 86-10s57 10 89 2m-7-4 8 4-8 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </span>
        )}
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
