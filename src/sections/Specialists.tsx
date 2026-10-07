import { PartDrawing, PenArrow } from "../illustrations/BenchSketches";
import { BadgeCheck, CircuitBoard, Cpu } from "lucide-react";
import type { Mode } from "../types";
import { SectionHeading } from "../components/SectionHeading";
export function Specialists({ mode }: { mode: Mode }) {
  const specialists = [
    {
      initials: "CB",
      name: "Cliceu Buture de Oliveira",
      role: "ESPECIALISTA EM ELETRÔNICA E TELECOM",
      description:
        "Tecnólogo em Eletrônica pela UTFPR com mais de 20 anos de experiência em manutenção de sistemas críticos e automação. Especialista em diagnóstico de precisão e reparos de alta complexidade.",
      skills: [
        "Diagnóstico Avançado",
        "Sistemas de RF e Telecom",
        "Experiência em Sistemas Críticos",
      ],
      icon: CircuitBoard,
      note: "20+ anos resolvendo o que parece impossível.",
    },
    {
      initials: "PB",
      name: "Pedro Buture de Oliveira",
      role: "ENGENHEIRO DE COMPUTAÇÃO",
      description:
        "Especialista em hardware e micro-solda, focado em diagnósticos complexos e reparos de alta precisão.",
      skills: [
        "Diagnóstico Avançado",
        "Micro-solda",
        mode === "drones" ? "Teste técnico" : "Teste em Console",
      ],
      icon: Cpu,
      note: "atenção até na menor solda.",
    },
  ];
  return (
    <section id="especialistas" className="specialists container section-space">
      <SectionHeading
        code="03 / QUEM ESTÁ NA BANCADA"
        title={"A identidade é de outro mundo.\nA experiência é daqui."}
        description="Conhecimento técnico, mãos experientes e atenção ao que realmente importa: o seu equipamento."
      />
      <div className="specialist-grid">
        {specialists.map((person) => (
          <article className="specialist" key={person.initials}>
            <div className="specialist-header">
              <span className="person-record mono">
                REGISTRO / {person.initials}-01
              </span>
              <div className="initials">
                {person.initials}
                <person.icon size={17} />
              </div>
              <span className="mono">
                EQUIPE TÉCNICA <BadgeCheck size={16} />
              </span>
            </div>
            <p className="specialist-role mono">{person.role}</p>
            <h3>{person.name}</h3>
            <p className="specialist-description">{person.description}</p>
            <ul className="skill-tags">
              {person.skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <div className="specialist-bench-note">
              <PartDrawing kind="board" />
              <p className="hand specialist-note">
                {person.note}
                <PenArrow direction="left" />
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
