import { useState } from "react";
import { Plane, Gamepad2, Menu, X, MessageCircle } from "lucide-react";
import type { Mode } from "../types";
import { Ufo } from "../illustrations/TechnicalDrawing";
import { whatsappUrl } from "../utils/whatsapp";

export function Brand() {
  return (
    <a
      className="brand"
      href="#inicio"
      aria-label="Oficina Discos Voadores e Drones — início"
    >
      <Ufo />
      <span>
        <strong>OFICINA</strong>
        <span>DISCOS VOADORES & DRONES</span>
      </span>
    </a>
  );
}
export function Header({
  mode,
  onModeChange,
}: {
  mode: Mode;
  onModeChange: (mode: Mode) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
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
          <div
            className="mode-switch"
            role="group"
            aria-label="Área de atendimento"
          >
            <button
              aria-pressed={mode === "drones"}
              onClick={() => onModeChange("drones")}
              className={mode === "drones" ? "active" : ""}
            >
              <Plane size={16} />
              <span>Drones</span>
            </button>
            <button
              aria-pressed={mode === "controles"}
              onClick={() => onModeChange("controles")}
              className={mode === "controles" ? "active" : ""}
            >
              <Gamepad2 size={16} />
              <span>Controles</span>
            </button>
          </div>
          <button
            className="menu-button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav
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
          <a
            href={whatsappUrl(
              "Olá! Gostaria de falar com a Oficina Discos Voadores.",
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} /> WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
