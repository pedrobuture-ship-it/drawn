import {
  ArrowDown,
  ArrowUpRight,
  MapPin,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { SketchDivider, PartDrawing } from "../illustrations/BenchSketches";
import type { Mode } from "../types";
import { business } from "../data/business";
import { TechnicalDrawing } from "../illustrations/TechnicalDrawing";
import { InlineSketchArrow } from "../components/InlineSketchArrow";
export function Hero({ mode }: { mode: Mode }) {
  const drone = mode === "drones";
  return (
    <section tabIndex={-1} className="hero container" id="inicio">
      <div className="hero-topline mono">
        <span>
          <svg
            className="crosshair"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M12 2v20M2 12h20M5 5l14 14M5 19 19 5"
              stroke="currentColor"
              strokeWidth="1.4"
            />
            <circle
              cx="12"
              cy="12"
              r="6"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>{" "}
          ELETRÔNICA DE PRECISÃO. PERSONALIDADE DE OUTRO PLANETA.
        </span>
        <span className="hero-coordinate">25°05′ S · 50°09′ W</span>
      </div>
      <div className="hero-grid">
        <div className="notebook-binding" aria-hidden="true">
          <i />
          <i />
          <i />
          <span className="mono">CADERNO DE BANCADA / UFO-042</span>
        </div>
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
              VER SERVIÇOS <ArrowDown size={17} aria-hidden="true" />
            </a>
            <span className="hero-cta-note">
              <svg
                className="hero-comment-arrow"
                viewBox="0 0 40 28"
                preserveAspectRatio="none"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path
                  className="hero-arrow-inline"
                  d="M36 7c-8-2-17 1-30 8m7-5-8 5 9 3"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  className="hero-arrow-stacked"
                  d="M29 25c7-8 1-16-14-21m1 7-2-8 9 2"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
              <span className="hand">
                {drone ? "a missão ainda não acabou." : "não compra outro ainda"}
              </span>
            </span>
          </div>
          <div className="hero-trust">
            <span>
              <MapPin size={15} aria-hidden="true" /> {business.city}
            </span>
            <span>
              <Wrench size={15} aria-hidden="true" /> Reparo especializado
            </span>
          </div>
        </div>
        <div className="drawing-panel">
          <span className="drawing-corner corner-a" aria-hidden="true" />
          <span className="drawing-corner corner-b" aria-hidden="true" />
          <div className="drawing-label mono">
            <span>
              FIG. {drone ? "01" : "02"} /{" "}
              {drone ? "OBJETO VOADOR" : "CONTROLADOR"}
            </span>
            <ArrowUpRight size={17} aria-hidden="true" />
          </div>
          <TechnicalDrawing mode={mode} />
          <div className="hero-detail">
            <PartDrawing kind={drone ? "gimbal" : "analog"} />
            <span>
              <span className="mono">
                DETALHE {drone ? "01-A" : "02-A"} / SEM ESCALA
              </span>
              <span className="hand">
                {drone ? "olhar de perto" : "essa peça sai"}{" "}
                <InlineSketchArrow />
              </span>
            </span>
          </div>
          <div className="drawing-footer mono">
            <span>DIAGNÓSTICO ANTES DE QUALQUER REPARO</span>
            <span className="drawing-stamp">
              INSPECIONAR
              <br />
              REPARAR
              <br />
              TESTAR <ShieldCheck size={13} aria-hidden="true" />
            </span>
          </div>
        </div>
      </div>
      <div className="hero-bottom mono">
        <SketchDivider className="hero-ruler" />
        <span>UMA OFICINA. DOIS UNIVERSOS.</span>
        <span>
          DESÇA PARA EXPLORAR <ArrowDown size={14} aria-hidden="true" />
        </span>
      </div>
    </section>
  );
}
