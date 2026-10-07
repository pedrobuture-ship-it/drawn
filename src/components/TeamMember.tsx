import { PartDrawing, PenArrow } from "../illustrations/BenchSketches";
import { BadgeCheck } from "lucide-react";
import type { Mode } from "../types";
import type { TeamMemberData } from "../data/team";
export function TeamMember({
  person,
  mode,
}: {
  person: TeamMemberData;
  mode: Mode;
}) {
  return (
    <article className="specialist" key={person.initials}>
      <div className="specialist-header">
        <span className="person-record mono">
          REGISTRO / {person.initials}-01
        </span>
        <div className="initials">{person.initials}</div>
        <span className="mono">
          EQUIPE TÉCNICA <BadgeCheck size={16} aria-hidden="true" />
        </span>
      </div>
      <p className="specialist-role mono">{person.role}</p>
      <h3>{person.name}</h3>
      <p className="specialist-description">{person.description}</p>
      <ul className="skill-tags">
        {[
          ...person.skills,
          ...(person.modeSkill ? [person.modeSkill[mode]] : []),
        ].map((s) => (
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
  );
}
