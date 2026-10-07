import { ArrowUpRight, MessageCircle } from "lucide-react";
import { useContactMessage } from "../context/RepairQuote";
import { Ufo } from "../illustrations/TechnicalDrawing";
import type { Mode } from "../types";
import { WhatsAppCTA } from "../components/WhatsAppCTA";
export function Contact({ mode }: { mode: Mode }) {
  const drone = mode === "drones";
  const message = useContactMessage(mode);
  return (
    <>
      <section tabIndex={-1} id="contato" className="contact-section">
        <div className="container contact-grid">
          <div>
            <p className="section-code mono">04 / PRÓXIMA MISSÃO</p>
            <h2>
              {drone ? (
                <>
                  Pronto para colocar
                  <br />
                  seu drone de volta <span>no ar?</span>
                </>
              ) : (
                <>
                  Pronto para jogar
                  <br />
                  sem brigar com o <span>analógico?</span>
                </>
              )}
            </h2>
            <WhatsAppCTA className="button button-dark" message={message}>
              <MessageCircle size={18} aria-hidden="true" />
              {drone ? "ENVIAR PARA DIAGNÓSTICO" : "CHAMAR NO WHATSAPP"}
              <ArrowUpRight size={18} aria-hidden="true" />
            </WhatsAppCTA>
          </div>
          <div className="contact-doodle">
            <Ufo />
            <span className="hand">
              {drone ? (
                <>
                  voar é melhor do que
                  <br />
                  ficar na bancada.
                </>
              ) : (
                <>
                  controle novo?
                  <br />
                  calma aí.
                </>
              )}
            </span>
            <span className="contact-orbit" aria-hidden="true" />
          </div>
        </div>
      </section>
    </>
  );
}
