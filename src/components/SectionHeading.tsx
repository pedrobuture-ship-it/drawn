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
      <div>
        <p className="section-code mono">
          <span>+</span> {code}
        </p>
        <h2>{title}</h2>
      </div>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
