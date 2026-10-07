import type { Mode } from "../types";
import { Ufo } from "../illustrations/TechnicalDrawing";
import { PenCheck, PenCircle, PenArrow } from "../illustrations/BenchSketches";

export function Report({ mode }: { mode: Mode }) {
  const drone = mode === "drones";
  const fields = drone
    ? [
        ["OBJETO VOADOR", "IDENTIFICADO"],
        ["GIMBAL", "VERIFICADO"],
        ["MOTORES", "TESTADOS"],
        ["GPS / IMU", "CALIBRADOS"],
      ]
    : [
        ["CONTROLADOR", "IDENTIFICADO"],
        ["ANALÓGICO", "CALIBRADO"],
        ["BOTÕES", "TESTADOS"],
        ["PLACA", "REVISADA"],
      ];
  return (
    <section className="report">
      <div className="container">
        <div className="report-sheet">
          <div className="report-heading mono">
            <span>RELATÓRIO DE OCORRÊNCIA // UFO-042</span>
            <span className="report-index">FICHA 042 / REV. A</span>
          </div>
          <div className="report-layout">
            <div className="report-register">
              <p className="report-register-label mono">
                COMPONENTE <span>VERIFICAÇÃO</span>
              </p>
              <div className="report-rows" key={mode}>
                {fields.map(([label, value]) => (
                  <div className="report-row" key={label}>
                    <span className="mono">{label}</span>
                    <span className="report-leader" aria-hidden="true" />
                    <strong>{value}</strong>
                    <PenCheck />
                  </div>
                ))}
              </div>
              <p className="report-protocol mono">
                PROTOCOLO DE BANCADA · INSPEÇÃO / REPARO / TESTE
              </p>
            </div>
            <div className="report-mission">
              <span className="mono">MISSÃO:</span>
              <strong>
                {drone
                  ? "COLOCAR SEU DRONE\nDE VOLTA AO CÉU"
                  : "DEVOLVER\nSUA PRECISÃO"}
              </strong>
              <span className="report-approved hand">
                <PenCircle />
                testado <PenCheck />
              </span>
              <span className="report-mission-code mono">
                UFO-042 / {drone ? "DR" : "CT"}
              </span>
            </div>
          </div>
          <div className="report-note">
            <span className="hand">
              {drone
                ? "abduzimos apenas os problemas."
                : "para deixar bem claro: abduzimos apenas os problemas."}
              <PenArrow direction="right" />
            </span>
            <Ufo />
          </div>
        </div>
      </div>
    </section>
  );
}
