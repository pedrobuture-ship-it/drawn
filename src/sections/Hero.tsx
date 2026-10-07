import {
  ArrowDown,
  ArrowUpRight,
  MapPin,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import type { Mode } from "../types";
import { TechnicalDrawing } from "../illustrations/TechnicalDrawing";
export function Hero({ mode }: { mode: Mode }) {
  const drone = mode === "drones";
  return (
    <section className="hero container" id="inicio">
      <div className="hero-topline mono">
        <span>
          <span className="crosshair">✳</span> ELETRÔNICA DE PRECISÃO.
          PERSONALIDADE DE OUTRO PLANETA.
        </span>
        <span className="hero-coordinate">25°05′ S · 50°09′ W</span>
      </div>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="orange-dot" />
            {drone
              ? "TECNOLOGIA DE OUTRO MUNDO"
              : "CONTROLES · REPARO ESPECIALIZADO"}
          </p>
          <h1 key={mode}>
            {drone ? (
              <>
                Seu drone caiu
                <br />
                ou parou de <span className="sketch-underline">voar?</span>
              </>
            ) : (
              <>
                Seu controle
                <br />
                perdeu a <span className="sketch-underline">precisão?</span>
              </>
            )}
          </h1>
          <p className="hero-statement">
            {drone
              ? "Ele volta ao ar com segurança."
              : "A próxima partida começa na bancada."}
          </p>
          <p className="hero-description">
            {drone
              ? "Motores, placas, câmeras, gimbal e sensores. Encontramos o defeito e cuidamos de cada detalhe para o seu próximo voo."
              : "Drift, botões falhando, gatilhos, bateria ou placa. Diagnosticamos o problema e devolvemos seu controle pronto para jogar."}
          </p>
          <div className="hero-cta">
            <a className="button button-dark" href="#servicos">
              VER SERVIÇOS <ArrowDown size={17} />
            </a>
            <span className="hand">
              {drone ? "a missão ainda não acabou." : "não compra outro ainda"}
              <span className="hand-arrow">↙</span>
            </span>
          </div>
          <div className="hero-trust">
            <span>
              <MapPin size={15} /> Ponta Grossa, PR
            </span>
            <span>
              <Wrench size={15} /> Reparo especializado
            </span>
          </div>
        </div>
        <div className="drawing-panel">
          <div className="drawing-label mono">
            <span>
              FIG. {drone ? "01" : "02"} /{" "}
              {drone ? "OBJETO VOADOR" : "CONTROLADOR"}
            </span>
            <ArrowUpRight size={17} />
          </div>
          <TechnicalDrawing mode={mode} />
          <div className="drawing-footer mono">
            <span>DIAGNÓSTICO ANTES DE QUALQUER REPARO</span>
            <span className="drawing-stamp">
              INSPECIONAR
              <br />
              REPARAR
              <br />
              TESTAR <ShieldCheck size={13} />
            </span>
          </div>
        </div>
      </div>
      <div className="hero-bottom mono">
        <span>UMA OFICINA. DOIS UNIVERSOS.</span>
        <span>
          DESÇA PARA EXPLORAR <ArrowDown size={14} />
        </span>
      </div>
    </section>
  );
}
