import { motion, useReducedMotion } from "framer-motion";

export type PartKind =
  "analog" | "tmr" | "board" | "gimbal" | "motor" | "sensor" | "structure";

/** Pen sketches are schematic, with intentionally offset construction strokes. */
export function PartDrawing({
  kind,
  className = "",
}: {
  kind: PartKind;
  className?: string;
}) {
  const labels: Record<PartKind, string> = {
    analog: "Analógico em desenho técnico",
    tmr: "Joystick TMR em desenho técnico",
    board: "Placa eletrônica com trilhas e pontos de solda",
    gimbal: "Gimbal e câmera em desenho técnico",
    motor: "Motor e hélice em desenho técnico",
    sensor: "Módulo de sensores e GPS em desenho técnico",
    structure: "Estrutura de drone em inspeção técnica",
  };
  return (
    <svg
      className={`part-drawing ${className}`}
      viewBox="0 0 220 150"
      fill="none"
      role="img"
      aria-label={labels[kind]}
    >
      <g
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {(kind === "analog" || kind === "tmr") && (
          <>
            <path d="m63 95 65-14 36 22-64 22-37-30Zm0 0-1 11 37 30 66-22-1-11M100 125l-1 11M72 107l-5 12m17-2-4 11m27 2v14m16-19v14m15-19v13m13-18v11" />
            <path
              d="m80 91 1-29 47-10 22 18-2 29-44 13-24-21Z"
              fill="var(--paper)"
            />
            <path d="m81 62 25 20 44-12M105 83l-1 29M87 74l9 8v16l-10-7zM119 80v23m9-25v23m9-25v20" />
            <path d="m108 71 1-24 11-3 1 24" fill="var(--paper)" />
            <path
              d="M92 37c3-10 34-16 43-7 8 7-4 17-19 20-15 1-27-5-24-13Z"
              fill="var(--paper)"
            />
            <path d="M92 36c6 6 30 4 43-6M92 37v5c6 9 31 7 41-3l2-9" />
            <path d="m72 97 5 5m76 4 4 2M105 120l5 2" />
            {kind === "tmr" ? (
              <>
                <path d="m143 85 12-4 5 6-12 6-5-8Z" stroke="var(--orange)" />
                <path
                  d="M173 63q-15 0-19 18m-3-7 3 8 6-6"
                  stroke="var(--orange)"
                />
                <path d="M87 57c-8 3-11 12-10 23" stroke="var(--green)" />
                <text
                  x="162"
                  y="55"
                  className="part-mono"
                  stroke="none"
                  fill="var(--orange)"
                >
                  TMR
                </text>
              </>
            ) : (
              <path
                d="M151 62q20-14 35-10m-9-5 10 5-10 5"
                stroke="var(--orange)"
              />
            )}
          </>
        )}
        {kind === "board" && (
          <>
            <path d="m37 44 127-9 27 64-128 16-26-71Z" fill="var(--paper)" />
            <path d="m43 50 117-8 21 52-114 14-24-58Z" strokeWidth=".8" />
            <path d="m87 62 35-3 10 27-36 4-9-28Z" fill="#ddd9ce" />
            <path d="m85 67-11 2m13 6-11 2m15 6-11 2m43-19 11-2m-8 10 11-2m-8 11 12-2M95 58l-3-9m11 8-2-9m12 8-2-9m-6 43 3 10m6-11 3 10m6-11 3 10" />
            <path
              d="m69 102-4-12 14-2-5-17-15 2-6-17m91 43-4-12 21-4-5-11 17-2M78 56l-5-13m68 12 19-1 5 13"
              stroke="var(--green)"
            />
            <path d="m150 39 3-12 9-1 5 14m-16-13 12-1" />
            <circle cx="54" cy="54" r="3" />
            <circle cx="171" cy="93" r="3" />
            <circle cx="77" cy="98" r="2" />
            <circle cx="154" cy="62" r="2" />
            <path
              d="M195 122q-30-8-65-36m7 1-9-4 3 10"
              stroke="var(--orange)"
            />
            <text
              x="142"
              y="139"
              className="part-hand"
              stroke="none"
              fill="var(--orange)"
            >
              micro-solda
            </text>
          </>
        )}
        {kind === "gimbal" && (
          <>
            <path d="m74 28 60 1 7 16-68-1 1-16Z" />
            <path d="M84 43v24l17 11m27-35v23l-14 10M81 56l-15 8 4 48 30 13 48-11 10-43-17-15" />
            <path
              d="m98 70 39-2 13 19-6 31-40 8-16-21 10-35Z"
              fill="var(--paper)"
            />
            <path d="m101 74 33-2 10 17-6 24-29 7-14-16 6-30Z" />
            <path d="m89 89-13-6-3 28 18 9m54-32 10-4" />
            <ellipse
              cx="119"
              cy="97"
              rx="12"
              ry="16"
              transform="rotate(8 119 97)"
            />
            <ellipse
              cx="119"
              cy="97"
              rx="7"
              ry="10"
              transform="rotate(8 119 97)"
            />
            <path
              d="M167 34q-7 11-30 29m2-10-4 13 12-5"
              stroke="var(--orange)"
            />
            <text
              x="143"
              y="22"
              className="part-hand"
              stroke="none"
              fill="var(--orange)"
            >
              conferir ↙
            </text>
          </>
        )}
        {kind === "motor" && (
          <>
            <path
              d="M75 72c2-25 47-29 54-6l1 34c-12 15-44 17-55 0V72Z"
              fill="var(--paper)"
            />
            <ellipse
              cx="101"
              cy="70"
              rx="27"
              ry="13"
              transform="rotate(-3 101 70)"
            />
            <path d="M81 78v22m10-18v21m12-20v20m12-22v20m10-26v21M82 105l-9 13m45-12 9 11m-27-42 3-19" />
            <path
              d="M94 50c-23-21-52-28-61-19-2 7 25 25 63 28 31 18 59 27 67 15 1-10-27-20-59-22Z"
              fill="var(--paper)"
            />
            <circle cx="101" cy="53" r="5" />
            <path
              d="M158 118q-27 9-34-4m-1 8 0-10 10 2"
              stroke="var(--orange)"
            />
            <text
              x="154"
              y="105"
              className="part-mono"
              stroke="none"
              fill="var(--orange)"
            >
              M-04
            </text>
          </>
        )}
        {kind === "sensor" && (
          <>
            <path d="m54 66 81-12 31 27-82 16-30-31Zm0 0 1 12 29 29 82-16V81M84 97v10" />
            <path d="m90 76 26-5 10 9-28 5-8-9ZM98 84v8m18-11v9M59 78l-6 17m16-7-4 15m28 5-1 13m17-16v13m16-17v12m18-16v13" />
            <path d="m121 60 1-25 17-2 9 25-27 2Z" />
            <path
              d="M114 42q-17-9-7-20m41 20q15-11 2-23m-39-2q-18 17-3 32m45-34q19 17 2 34"
              stroke="var(--green)"
            />
            <path
              d="M151 109q22 2 23-19m-5 5 6-8 3 10"
              stroke="var(--orange)"
            />
          </>
        )}
        {kind === "structure" && (
          <>
            <path
              d="m70 45 44 17 41-18 17 16-40 24 20 37-19 9-27-35-35 22-13-16 40-28-39-12 11-16Z"
              fill="var(--paper)"
            />
            <path d="m98 58 23 6 12 18-14 17-23-14 2-27Z" />
            <circle cx="65" cy="49" r="14" />
            <circle cx="161" cy="51" r="14" />
            <circle cx="64" cy="110" r="14" />
            <circle cx="146" cy="122" r="14" />
            <path d="m37 49 51-3m52 9 42-8m-133 68 36-11m43 18 39 7" />
            <path
              d="M153 26c-18-12-28 3-24 16m-1-9 1 11 10-3"
              stroke="var(--orange)"
            />
            <text
              x="158"
              y="27"
              className="part-mono"
              stroke="none"
              fill="var(--orange)"
            >
              REVISAR
            </text>
          </>
        )}
      </g>
      <g stroke="#8d887b" strokeWidth=".7" opacity=".6">
        <path d="M27 133h46m-38-7v14m30-14v14M196 57v54m-5-45h10m-10 35h10" />
      </g>
    </svg>
  );
}

export function PenCircle({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pen-circle ${className}`}
      viewBox="0 0 200 100"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M172 13C131-3 22 1 10 40c-16 46 80 61 145 43 50-13 48-61 9-71M166 9C111 0 32 8 15 38"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
export function PenArrow({
  className = "",
  direction = "right",
}: {
  className?: string;
  direction?: "right" | "left" | "up";
}) {
  const path =
    direction === "left"
      ? "M151 15c-40-11-67 44-135 20m9-6-11 5 8 10"
      : direction === "up"
        ? "M12 55c58 6 93-3 115-43m-12 5 14-7 2 16"
        : "M9 40c57 25 88-30 141-16m-10-9 12 10-14 5";
  return (
    <svg
      className={`pen-arrow ${className}`}
      viewBox="0 0 164 72"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={path}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function SketchDivider({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <svg
      className={`sketch-divider ${className}`}
      viewBox="0 0 1000 16"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <motion.path
        d="M2 9C116 6 175 11 268 8S459 11 566 8 749 7 847 9s107-2 150-1"
        stroke="currentColor"
        strokeWidth="1"
        initial={reduce ? false : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      />
      <path
        d="m4 3 1 11m245-9-1 8m254-11 1 12m248-10-1 10m242-10 1 12M41 11q133-5 183-1"
        stroke="currentColor"
        strokeWidth=".6"
        opacity=".65"
      />
    </svg>
  );
}
export function PenCheck({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <svg
      className={`pen-check ${className}`}
      viewBox="0 0 32 25"
      fill="none"
      aria-hidden="true"
    >
      <motion.path
        d="m4 12 6 8C17 12 23 6 28 3M5 12l6 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduce ? false : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      />
    </svg>
  );
}
