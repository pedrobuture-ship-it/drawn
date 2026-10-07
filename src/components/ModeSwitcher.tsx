import { Plane, Gamepad2 } from "lucide-react";
import type { Mode } from "../types";

export function ModeSwitcher({
  mode,
  onChange,
}: {
  mode: Mode;
  onChange: (mode: Mode) => void;
}) {
  return (
    <div className="mode-switch" role="group" aria-label="Área de atendimento">
      <button
        type="button"
        aria-pressed={mode === "drones"}
        onClick={() => onChange("drones")}
        className={mode === "drones" ? "active" : ""}
      >
        <Plane size={16} aria-hidden="true" />
        <span>Drones</span>
      </button>
      <button
        type="button"
        aria-pressed={mode === "controles"}
        onClick={() => onChange("controles")}
        className={mode === "controles" ? "active" : ""}
      >
        <Gamepad2 size={16} aria-hidden="true" />
        <span>Controles</span>
      </button>
    </div>
  );
}
