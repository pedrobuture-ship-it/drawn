import { team } from "../data/team";
import { TeamMember } from "../components/TeamMember";
import type { Mode } from "../types";
import { SectionHeading } from "../components/SectionHeading";
export function Specialists({ mode }: { mode: Mode }) {
  return (
    <section
      tabIndex={-1}
      id="especialistas"
      className="specialists container section-space"
    >
      <SectionHeading
        code="03 / QUEM ESTÁ NA BANCADA"
        title={"A identidade é de outro mundo.\nA experiência é daqui."}
        description="Conhecimento técnico, mãos experientes e atenção ao que realmente importa: o seu equipamento."
      />
      <div className="specialist-grid">
        {team.map((person) => (
          <TeamMember key={person.initials} person={person} mode={mode} />
        ))}
      </div>
    </section>
  );
}
