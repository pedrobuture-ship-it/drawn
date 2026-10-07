import type { Mode } from "../types";

export interface TeamMemberData {
  initials: string;
  name: string;
  role: string;
  description: string;
  skills: string[];
  modeSkill?: Record<Mode, string>;
  note: string;
}

export const team: TeamMemberData[] = [
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
    note: "20+ anos resolvendo o que parece impossível.",
  },
  {
    initials: "PB",
    name: "Pedro Buture de Oliveira",
    role: "ENGENHEIRO DE COMPUTAÇÃO",
    description:
      "Especialista em hardware e micro-solda, focado em diagnósticos complexos e reparos de alta precisão.",
    skills: ["Diagnóstico Avançado", "Micro-solda"],
    modeSkill: { drones: "Teste técnico", controles: "Teste em Console" },
    note: "atenção até na menor solda.",
  },
];
