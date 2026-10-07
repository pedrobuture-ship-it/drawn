import {
  ArrowUpRight,
  MessageCircle,
  MapPin,
  Clock,
  ArrowUp,
} from "lucide-react";
import { Brand } from "../components/Header";
import { Ufo } from "../illustrations/TechnicalDrawing";
import type { Mode } from "../types";
import { whatsappUrl } from "../utils/whatsapp";
export function Contact({ mode }: { mode: Mode }) {
  const drone = mode === "drones";
  const message = drone
    ? "Olá! Gostaria de enviar meu drone para diagnóstico."
    : "Olá! Meu controle está com um problema e gostaria de um orçamento.";
  return (
    <>
      <section id="contato" className="contact-section">
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
            <a
              className="button button-dark"
              href={whatsappUrl(message)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} />
              {drone ? "ENVIAR PARA DIAGNÓSTICO" : "CHAMAR NO WHATSAPP"}
              <ArrowUpRight size={18} />
            </a>
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
      <footer className="footer container">
        <div className="footer-main">
          <div>
            <Brand />
            <p className="footer-tagline">
              Eletrônica de precisão.
              <br />
              Problemas de outro planeta, soluções daqui.
            </p>
          </div>
          <div className="footer-contact">
            <span className="mono">BASE DE OPERAÇÕES</span>
            <a
              href={whatsappUrl(message)}
              target="_blank"
              rel="noopener noreferrer"
            >
              (42) 99808-3069 <ArrowUpRight size={15} />
            </a>
            <p>
              <MapPin size={14} /> Ponta Grossa, PR
            </p>
          </div>
          <div className="footer-hours">
            <span className="mono">HORÁRIO DE ATENDIMENTO</span>
            <p>
              <Clock size={14} /> Seg – Sex: 09h às 18h
            </p>
            <p>Sáb: 09h às 12h</p>
          </div>
          <a
            className="back-to-top"
            href="#inicio"
            aria-label="Voltar ao início"
          >
            <ArrowUp size={20} />
          </a>
        </div>
        <div className="footer-bottom mono">
          <span>
            © 2026 OFICINA DISCOS VOADORES. TODOS OS DIREITOS RESERVADOS.
          </span>
          <span className="online-status">
            <i /> STATUS: OFICINA ONLINE
          </span>
        </div>
      </footer>
      <a
        className="floating-whatsapp"
        href={whatsappUrl(message)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar com a oficina pelo WhatsApp"
      >
        <MessageCircle size={22} />
        <span>Vamos conversar?</span>
      </a>
    </>
  );
}
