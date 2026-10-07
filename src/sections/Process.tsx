import {
  ArrowRight,
  ClipboardCheck,
  Package,
  Search,
  Wrench,
} from "lucide-react";
import type { Mode } from "../types";
import { SectionHeading } from "../components/SectionHeading";
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
    <section id="processo" className="process-section">
      <div className="container section-space">
        <SectionHeading
          code="02 / PROTOCOLO DE REPARO"
          title="Da sua mão à nossa bancada."
          description="Sem mistério. Sem reparo antes da sua aprovação."
        />
        <div className="process-grid">
          {steps.map((step, i) => (
            <article className="process-step" key={step.title}>
              <div className="step-top">
                <span className="mono">WP-0{i + 1}</span>
                <step.icon size={25} strokeWidth={1.3} />
                {i < 3 && <ArrowRight className="step-arrow" size={20} />}
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              <span className="step-number" aria-hidden="true">
                0{i + 1}
              </span>
            </article>
          ))}
        </div>
        <p className="hand process-note">
          o teste é a última etapa. nunca um detalhe. <span>↖</span>
        </p>
      </div>
    </section>
  );
}
