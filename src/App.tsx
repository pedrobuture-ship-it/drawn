import { useMemo, useState } from "react";
import { flushSync } from "react-dom";
import { usePageTool } from "./hooks/usePageTool";
import { MotionConfig } from "framer-motion";
import type { Mode } from "./types";
import { Header } from "./components/Header";
import { Hero } from "./sections/Hero";
import { Report } from "./sections/Report";
import { DroneServices } from "./sections/DroneServices";
import { ControllerServices } from "./sections/ControllerServices";
import { Process } from "./sections/Process";
import { Specialists } from "./sections/Specialists";
import { Contact } from "./sections/Contact";
export default function App() {
  const [mode, setMode] = useState<Mode>("drones");
  const modeTool = useMemo(
    () => ({
      name: "set_service_mode",
      description:
        "Alterna o modo visível da oficina entre drones e controles. Não envia mensagens ou pedidos.",
      inputSchema: {
        type: "object",
        properties: { mode: { type: "string", enum: ["drones", "controles"] } },
        required: ["mode"],
        additionalProperties: false,
      },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute(input: unknown) {
        const value = input as { mode?: unknown } | null;
        if (!value || (value.mode !== "drones" && value.mode !== "controles"))
          throw new Error("Modo inválido.");
        const next = value.mode;
        flushSync(() => setMode(next));
        return { mode: next };
      },
    }),
    [],
  );
  usePageTool(modeTool);
  return (
    <MotionConfig reducedMotion="user">
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header mode={mode} onModeChange={setMode} />
      <main id="conteudo">
        <Hero mode={mode} />
        <Report mode={mode} />
        {mode === "drones" ? <DroneServices /> : <ControllerServices />}
        <Process mode={mode} />
        <Specialists mode={mode} />
        <Contact mode={mode} />
      </main>
    </MotionConfig>
  );
}
