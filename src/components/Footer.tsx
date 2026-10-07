import {
  ArrowUpRight,
  MapPin,
  Clock,
  ArrowUp,
  MessageCircle,
} from "lucide-react";
import { Brand } from "./Brand";
import { business } from "../data/business";
import type { Mode } from "../types";
import { useContactMessage } from "../context/RepairQuote";
import { WhatsAppCTA } from "./WhatsAppCTA";
export function Footer({ mode }: { mode: Mode }) {
  const message = useContactMessage(mode);
  return (
    <>
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
            <WhatsAppCTA message={message}>
              {business.displayPhone}{" "}
              <ArrowUpRight size={15} aria-hidden="true" />
            </WhatsAppCTA>
            <p>
              <MapPin size={14} aria-hidden="true" /> {business.city}
            </p>
          </div>
          <div className="footer-hours">
            <span className="mono">HORÁRIO DE ATENDIMENTO</span>
            <p>
              <Clock size={14} aria-hidden="true" /> {business.weekdays}
            </p>
            <p>{business.saturday}</p>
          </div>
          <a
            className="back-to-top"
            href="#inicio"
            aria-label="Voltar ao início"
          >
            <ArrowUp size={20} aria-hidden="true" />
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
      <WhatsAppCTA
        className="floating-whatsapp"
        message={message}
        aria-label="Conversar com a oficina pelo WhatsApp"
      >
        <MessageCircle size={22} aria-hidden="true" />
        <span>Vamos conversar?</span>
      </WhatsAppCTA>
    </>
  );
}
