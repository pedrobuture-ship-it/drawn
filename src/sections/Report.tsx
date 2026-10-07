import { motion } from "framer-motion";
import { Check, ScanLine } from "lucide-react";
import type { Mode } from "../types";
import { Ufo } from "../illustrations/TechnicalDrawing";
export function Report({ mode }: { mode: Mode }) {
  const drone = mode === "drones";
  const fields = drone
    ? [
        ["OBJETO VOADOR", "IDENTIFICADO"],
        ["DRONE ABDUZIDO", "DEVOLVIDO INTEIRO"],
        ["DRONE COM DEFEITO", "EM REPARO"],
      ]
    : [
        ["CONTROLADOR", "IDENTIFICADO"],
        ["ANALÓGICOS", "CALIBRADOS"],
        ["BOTÕES", "TESTADOS"],
        ["PLACA", "REVISADA"],
      ];
  return (
    <section className="report">
      <div className="container">
        <div className="report-heading mono">
          <span>
            <ScanLine size={16} /> RELATÓRIO DE OCORRÊNCIA // UFO-042
          </span>
          <span>PROTOCOLO DE BANCADA</span>
        </div>
        <div className={`report-grid ${drone ? "" : "report-controls"}`}>
          {fields.map(([label, value], i) => (
            <motion.div
              className="report-field"
              key={label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.25 }}
            >
              <span className="mono">{label}</span>
              <strong>
                {value} <Check size={17} />
              </strong>
            </motion.div>
          ))}
          <div className="report-field report-mission">
            <span className="mono">MISSÃO</span>
            <strong>
              {drone ? "DE VOLTA AO CÉU." : "DEVOLVER SUA PRECISÃO."}
            </strong>
          </div>
        </div>
        <div className="report-note">
          <span className="mono">
            {drone
              ? "COLOCAR SEU DRONE DE VOLTA AO CÉU"
              : "PRECISÃO NA BANCADA. PRECISÃO NO JOGO."}
          </span>
          <span className="hand">
            {drone
              ? "abduzimos apenas os problemas."
              : "para deixar bem claro: abduzimos apenas os problemas."}{" "}
            <Ufo />
          </span>
        </div>
      </div>
    </section>
  );
}
