import { useRef, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import type { Mode } from "../types";
import { Brand } from "./Brand";
import { ModeSwitcher } from "./ModeSwitcher";
import { WhatsAppCTA } from "./WhatsAppCTA";
import { useContactMessage } from "../context/RepairQuote";

export function Header({
  mode,
  onModeChange,
}: {
  mode: Mode;
  onModeChange: (mode: Mode) => void;
}) {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const message = useContactMessage(mode);
  return (
    <header
      className="header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          menuButton.current?.focus();
        }
      }}
    >
      <div className="header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#servicos">Serviços</a>
          <a href="#processo">Como funciona</a>
          <a href="#especialistas">Especialistas</a>
          <a href="#contato">Contato</a>
        </nav>
        <div className="header-actions">
          <span className="mono mode-label">MODO:</span>
          <ModeSwitcher
            mode={mode}
            onChange={(next) => {
              onModeChange(next);
              setOpen(false);
            }}
          />
          <button
            type="button"
            ref={menuButton}
            className="menu-button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
      <nav
        hidden={!open}
        id="mobile-menu"
        className="mobile-nav"
        aria-label="Navegação mobile"
      >
        {[
          ["Serviços", "servicos"],
          ["Como funciona", "processo"],
          ["Especialistas", "especialistas"],
          ["Contato", "contato"],
        ].map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <WhatsAppCTA message={message} onClick={() => setOpen(false)}>
          <MessageCircle size={18} aria-hidden="true" /> WhatsApp
        </WhatsAppCTA>
      </nav>
    </header>
  );
}
