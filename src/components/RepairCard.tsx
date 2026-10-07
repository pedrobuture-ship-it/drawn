import {
  PartDrawing,
  PenCircle,
  PenArrow,
} from "../illustrations/BenchSketches";
import { Check, CircleCheck, Plus, ShieldCheck } from "lucide-react";
import type { RepairPlan } from "../types";
export function RepairCard({
  plan,
  index,
  selected,
  consoleName,
  onSelect,
}: {
  plan: RepairPlan;
  index: number;
  selected: boolean;
  consoleName: string;
  onSelect: (plan: RepairPlan) => void;
}) {
  return (
    <article
      className={`plan-card ${plan.recommended ? "recommended" : ""} ${selected ? "selected" : ""}`}
    >
      {plan.recommended && (
        <span className="recommend-label mono">MELHOR CUSTO-BENEFÍCIO</span>
      )}
      <div className="plan-top mono">
        <span>RP-0{index + 1}</span>
        <span>{plan.tier.toUpperCase()}</span>
      </div>
      <div className="plan-specimen">
        <div className="plan-price">
          <PenCircle />
          <span>R$</span>
          <strong>{plan.price}</strong>
        </div>
        <div className="plan-component">
          <PartDrawing kind={plan.tier === "Padrão" ? "analog" : "tmr"} />
          <span className="mono">
            {plan.tier === "Padrão" ? "ANALÓGICO" : "JOYSTICK TMR"}
          </span>
        </div>
      </div>
      <h3 className="part-name">
        <span>{plan.part}</span>
        <span className="part-note hand">
          {plan.tier === "Padrão" ? "essa peça sai" : "essa entra ↑"}
          <PenArrow direction="up" />
        </span>
      </h3>
      <p className="plan-warranty">
        <span className="warranty-caption mono">GARANTIA</span>
        <span className="warranty-value">
          <ShieldCheck size={17} aria-hidden="true" />
          {plan.warranty}
          {plan.tier !== "Padrão" && <PenCircle />}
        </span>
      </p>
      <ul>
        {plan.features.map((f) => (
          <li key={f}>
            <Check size={15} aria-hidden="true" />
            {f}
          </li>
        ))}
      </ul>
      <span className="hand plan-note">
        {plan.note}
        {plan.recommended && <PenArrow direction="up" />}
      </span>
      <button
        type="button"
        aria-label={`${selected ? "Reparo selecionado" : "Selecionar reparo"}: ${plan.tier} para ${consoleName}`}
        className={`button ${plan.recommended ? "button-dark" : ""}`}
        onClick={() => onSelect(plan)}
        aria-pressed={selected}
      >
        {selected ? "REPARO SELECIONADO" : "SELECIONAR REPARO"}
        {selected ? (
          <CircleCheck size={17} aria-hidden="true" />
        ) : (
          <Plus size={17} aria-hidden="true" />
        )}
      </button>
    </article>
  );
}
