import { SketchDivider } from "../illustrations/BenchSketches";
export function SectionHeading({
  code,
  title,
  description,
}: {
  code: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <SketchDivider className="section-ruler" />
      <div>
        <p className="section-code mono">
          <span>+</span> {code}
        </p>
        <h2>
          <span>{title}</span>
        </h2>
      </div>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
