import { ArrowUpRight, MessageCircle } from "lucide-react";
import { PartDrawing } from "../illustrations/BenchSketches";
import type { PartKind } from "../illustrations/BenchSketches";
import { droneServices } from "../data/droneServices";
import { SectionHeading } from "../components/SectionHeading";
import { whatsappUrl } from "../utils/whatsapp";
const drawings: Record<string, PartKind> = {
  camera: "gimbal",
  cpu: "board",
  fan: "motor",
  radar: "sensor",
  wrench: "structure",
};
const notes = [
  "gimbal → conferir",
  "olhar de perto ↖",
  "essa peça sai ↑",
  "calibrar, depois testar",
  "culpado nº 01?",
];
export function DroneServices() {
  return (
    <section
      tabIndex={-1}
      id="servicos"
      className="services section-space container"
    >
      <SectionHeading
        code="01 / SERVIÇOS PARA DRONES"
        title="Cada peça importa. Cada voo também."
        description="Do diagnóstico ao último ajuste: cuidado técnico para o equipamento que leva você mais longe."
      />
      <div className="drone-service-grid">
        {droneServices.map((service, i) => {
          return (
            <a
              className="service-card"
              key={service.code}
              href={whatsappUrl(
                `Olá! Gostaria de um orçamento para meu drone.\n\nServiço: ${service.fullTitle}.\n\nPosso enviar fotos ou vídeos do equipamento para um diagnóstico inicial?`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Solicitar orçamento: ${service.fullTitle}`}
            >
              <div className="card-top">
                <span className="mono">FICHA DE SERVIÇO</span>
                <span className="mono">{service.code}</span>
              </div>
              <div className="service-specimen">
                <PartDrawing kind={drawings[service.icon]} />
                <span className="hand">{notes[i]}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="card-bottom mono">
                <span>SOB CONSULTA</span>
                <ArrowUpRight size={20} aria-hidden="true" />
              </div>
            </a>
          );
        })}
        <div className="service-note">
          <span className="hand">
            Uma queda não precisa
            <br />
            ser o fim da história.
          </span>
          <svg viewBox="0 0 160 60" fill="none" aria-hidden="true">
            <path
              d="M144 8C78 3 77 62 16 39m10-7-12 7 11 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span className="mono">
            A GENTE INVESTIGA.
            <br />
            VOCÊ VOLTA A VOAR.
          </span>
        </div>
      </div>
      <div className="diagnosis">
        <div>
          <p className="mono">DIAGNÓSTICO INICIAL</p>
          <h3>Não sabe qual é o problema?</h3>
          <p>
            Envie fotos ou vídeos pelo WhatsApp e receba um diagnóstico inicial
            sem compromisso.
          </p>
        </div>
        <a
          className="button button-dark"
          href={whatsappUrl(
            "Olá! Meu drone está com um problema e gostaria de um diagnóstico inicial sem compromisso. Posso enviar fotos ou vídeos?",
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={17} aria-hidden="true" /> ENVIAR DIAGNÓSTICO{" "}
          <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
