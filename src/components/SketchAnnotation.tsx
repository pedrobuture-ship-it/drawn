type SketchAnnotationProps = {
  text: string;
  direction: "up-right" | "down-left";
  className?: string;
};

export function SketchAnnotation({
  text,
  direction,
  className = "",
}: SketchAnnotationProps) {
  return (
    <span className={`hand sketch-annotation ${className}`}>
      <span>{text}</span>
      <svg
        className="annotation-arrow"
        viewBox="0 0 42 44"
        fill="none"
        aria-hidden="true"
      >
        <path
          d={
            direction === "up-right"
              ? "M12 39c-8-14-6-25 7-30 5-2 12-3 20-3m-7-3 8 3-5 6"
              : "M31 5c6 10 2 18-8 24-4 3-9 6-12 10m0-8-1 9 9-2"
          }
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </span>
  );
}
