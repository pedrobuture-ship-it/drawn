import { m, useReducedMotion } from "framer-motion";
import type { Mode } from "../types";

export function Ufo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 76 56"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M23 25C21 7 51 5 53 25"
        fill="var(--orange)"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M6 28C8 16 65 17 70 28c4 15-62 15-64 0Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="var(--paper)"
      />
      <path
        d="M9 27c14 9 42 10 59 0M25 43l-4 7m17-6v8m13-9 4 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="22" cy="28" r="2" fill="var(--orange)" />
      <circle cx="38" cy="31" r="2" fill="var(--orange)" />
      <circle cx="54" cy="28" r="2" fill="var(--orange)" />
    </svg>
  );
}

function Drone() {
  return (
    <g>
      {/* Quadrotor viewed from above, with offset outlines and construction lines. */}
      <g
        fill="none"
        stroke="var(--sketch-secondary)"
        strokeWidth="1"
        opacity=".45"
        strokeDasharray="4 6"
      >
        <path d="M120 120l350 250M470 120 120 370M295 82v330M65 246h470" />
        <ellipse cx="295" cy="246" rx="208" ry="151" />
      </g>
      <g
        fill="var(--sketch-arm)"
        stroke="var(--sketch-ink)"
        strokeWidth="2.3"
        strokeLinejoin="round"
      >
        <path d="m266 223-107-80-23 25 113 95zm58 0 105-80 27 26-116 95zM260 267l-103 83 24 28 105-93zm72 0 110 85-25 28-106-93z" />
        <path
          d="m252 181 45-15 43 17 17 74-22 47-43 20-43-20-18-45z"
          fill="var(--sketch-shell)"
        />
        <path
          d="m260 185 36-9 35 11 11 66-17 39-32 15-32-15-15-39z"
          fill="var(--surface-card)"
        />
        <path d="m260 184 3 35 29 17 38-20 1-29M263 265l29 21 36-20M293 237v49" />
        <path d="m279 166 1-28 31 1 1 28" fill="var(--sketch-shaft)" />
        <path d="m276 140 41-1 2-21-43-1z" fill="var(--sketch-core)" />
        <circle cx="297" cy="129" r="8" fill="var(--paper)" />
        <circle cx="297" cy="129" r="4" />
        <path d="M278 300v23h29v-23" fill="var(--sketch-shell)" />
      </g>
      <g fill="var(--sketch-blade)" stroke="var(--sketch-ink)" strokeWidth="2.3">
        <circle cx="147" cy="153" r="24" />
        <circle cx="442" cy="153" r="24" />
        <circle cx="167" cy="365" r="24" />
        <circle cx="431" cy="365" r="24" />
        <path d="M142 144c-30-24-62-33-77-29-10 4 1 16 17 25l55 21c24 24 70 49 87 37 3-7-19-27-69-44zM436 144c-23-30-59-54-72-44-4 8 17 29 66 61 27 33 61 48 71 41 7-9-11-27-53-46zM158 357c-31-24-67-29-77-19-4 7 26 22 71 29 30 24 65 39 80 29 6-8-18-24-61-35zM425 356c-31-21-65-27-75-17-3 9 25 24 66 29 25 25 65 42 78 31 4-10-19-25-57-38z" />
        <circle cx="147" cy="153" r="7" />
        <circle cx="442" cy="153" r="7" />
        <circle cx="167" cy="365" r="7" />
        <circle cx="431" cy="365" r="7" />
      </g>
      <g stroke="var(--sketch-ink)" strokeWidth="1.1" fill="none">
        <path d="m254 237 10 8m-12 1 10 8m-11 1 10 8m77-25-11 8m13 1-10 8m11 1-10 8" />
        <circle cx="267" cy="193" r="2" />
        <circle cx="326" cy="194" r="2" />
        <circle cx="261" cy="284" r="2" />
        <circle cx="329" cy="283" r="2" />
      </g>
      <g fill="none" className="sketch-diagnostics" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round">
        <ellipse
          cx="442"
          cy="153"
          rx="45"
          ry="39"
          transform="rotate(-15 442 153)"
        />
        <path d="M492 104c-2 19-10 28-21 29m4-10-5 11 13-2M85 278q65 5 83 58m-2-12 4 14-13-6M364 83q-34 6-51 33m1-12-3 14 13-5" />
      </g>
      <g className="svg-hand" fill="var(--orange)">
        <text x="398" y="90" transform="rotate(-5 398 90)">
          queda detectada
        </text>
        <text x="38" y="270" transform="rotate(-5 38 270)">
          essa hélice sofreu.
        </text>
        <text x="310" y="70" transform="rotate(-4 310 70)">
          gimbal → conferir
        </text>
        <text x="230" y="434" fill="var(--green)" transform="rotate(-3 230 434)">
          isso aqui deveria estar voando ↑
        </text>
      </g>
      <g className="svg-tech" fill="var(--sketch-secondary)">
        <text x="37" y="407">
          VISTA SUPERIOR / ESC. 1:4
        </text>
        <text x="440" y="277">
          MOTOR 04
        </text>
        <path d="M426 272h-62" stroke="var(--sketch-secondary)" strokeWidth=".8" />
      </g>
    </g>
  );
}

function Controller() {
  return (
    <g>
      <g
        fill="none"
        stroke="var(--sketch-secondary)"
        strokeWidth="1"
        opacity=".45"
        strokeDasharray="4 6"
      >
        <path d="M300 78v333M58 239h482" />
        <ellipse cx="300" cy="252" rx="220" ry="135" />
      </g>
      <g
        fill="var(--surface-card)"
        stroke="var(--sketch-ink)"
        strokeWidth="2.4"
        strokeLinejoin="round"
      >
        <path d="M144 177c28-47 72-36 104-29h101c37-10 75-13 103 35 24 42 61 158 34 183-26 27-74-36-94-60H209c-22 32-62 88-94 64-31-24 7-151 29-193z" />
        <path
          d="m177 154-12-20 62-10 13 24m119-1 14-23 57 13-11 20"
          fill="var(--sketch-shoulder)"
        />
        <path d="M217 156h153l-5 83H222z" fill="var(--sketch-button)" />
        <path d="m157 198-34 123m311-123 41 123M211 304l24-40h129l28 40" />
        <path
          d="M155 207h16v-16h21v16h16v21h-16v16h-21v-16h-16z"
          fill="var(--sketch-button)"
        />
        <circle cx="244" cy="281" r="32" fill="var(--sketch-button)" />
        <circle cx="244" cy="281" r="23" fill="var(--sketch-core)" />
        <circle cx="244" cy="281" r="18" fill="var(--sketch-stick)" />
        <circle cx="355" cy="281" r="32" fill="var(--sketch-button)" />
        <circle cx="355" cy="281" r="23" fill="var(--sketch-core)" />
        <circle cx="355" cy="281" r="18" fill="var(--sketch-stick)" />
        <circle cx="415" cy="191" r="11" />
        <circle cx="437" cy="217" r="11" />
        <circle cx="391" cy="217" r="11" />
        <circle cx="415" cy="241" r="11" />
        <path
          d="m412 196 3-6 3 6zm21 18 7 7m0-7-7 7m-46-4h8v8h-8"
          strokeWidth="1"
        />
        <circle cx="415" cy="241" r="5" strokeWidth="1" />
        <path
          d="M287 269h24m-24 5h24m-24 5h24m-16 13 4-5 5 5-5 5z"
          strokeWidth="1.5"
        />
      </g>
      <g fill="none" className="sketch-diagnostics" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round">
        <ellipse
          cx="244"
          cy="282"
          rx="44"
          ry="43"
          transform="rotate(-14 244 282)"
        />
        <path d="M96 282q53-41 112-6m-11-8 13 8-13 4M446 114q-10 31-24 58m-2-11 1 14 10-7M285 368q-5-25-24-45m2 13-4-15 14 6" />
      </g>
      <g className="svg-hand" fill="var(--orange)">
        <text x="34" y="271" transform="rotate(-5 34 271)">
          drift detectado
        </text>
        <text x="404" y="103" transform="rotate(-4 404 103)">
          botões → testar
        </text>
        <text x="269" y="395" transform="rotate(-3 269 395)">
          culpado nº 01
        </text>
        <text x="241" y="437" fill="var(--green)" transform="rotate(-3 241 437)">
          trocamos isso aqui ↑
        </text>
      </g>
      <g className="svg-tech" fill="var(--sketch-secondary)">
        <text x="33" y="412">
          VISTA FRONTAL / ESC. 1:2
        </text>
        <text x="239" y="114">
          CONTROLADOR / REVISÃO A
        </text>
      </g>
    </g>
  );
}

export function TechnicalDrawing({ mode }: { mode: Mode }) {
  const reduce = useReducedMotion();
  return (
    <m.svg
      key={mode}
      className="technical-drawing"
      viewBox="0 0 600 470"
      role="img"
      aria-label={
        mode === "drones"
          ? "Desenho técnico de um drone com anotações de reparo de hélice, motor e gimbal"
          : "Desenho técnico de controle com o analógico circulado e anotações de diagnóstico"
      }
      initial={reduce ? false : { opacity: 0, x: 12, rotate: -1.4 }}
      animate={{ opacity: 1, x: 0, rotate: 0 }}
      transition={{ duration: reduce ? 0 : 0.38, ease: "easeOut" }}
    >
      {mode === "drones" ? <Drone /> : <Controller />}
    </m.svg>
  );
}
