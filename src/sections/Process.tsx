import { ProcessStep } from "../components/ProcessStep";
import { ClipboardCheck, Package, Search, Wrench } from "lucide-react";
import type { Mode } from "../types";
import { SectionHeading } from "../components/SectionHeading";
import { InlineSketchArrow } from "../components/InlineSketchArrow";
export function Process({ mode }: { mode: Mode }) {
  const steps = [
    {
      title: "Entrega",
      text: `Seu ${mode === "drones" ? "drone" : "controle"} chega à oficina pessoalmente ou por envio.`,
      icon: Package,
    },
    {
      title: "Diagnóstico",
      text: "Uma análise completa para encontrar a origem do problema.",
      icon: Search,
    },
    {
      title: "Orçamento",
      text: "Você recebe o valor antes de aprovar. Tudo às claras.",
      icon: ClipboardCheck,
    },
    {
      title: "Reparo e teste",
      text:
        mode === "drones"
          ? "Teste técnico e, quando aplicável, teste de voo antes da entrega."
          : "Gamepad Tester + console real. Seu controle só sai depois de testado.",
      icon: Wrench,
    },
  ];
  return (
    <section tabIndex={-1} id="processo" className="process-section">
      <div className="container section-space">
        <SectionHeading
          code="02 / PROTOCOLO DE REPARO"
          title="Da sua mão à nossa bancada."
          description="Sem mistério. Sem reparo antes da sua aprovação."
        />
        <div className="process-grid">
          {steps.map((step, i) => (
            <ProcessStep step={step} index={i} key={step.title} />
          ))}
        </div>
        <p className="hand process-note">
        o teste é a última etapa. nunca um detalhe. <span><InlineSketchArrow /></span>
        </p>
      </div>
    </section>
  );
}
