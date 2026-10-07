import { PartDrawing, PenCircle } from "../illustrations/BenchSketches";
import { SketchAnnotation } from "./SketchAnnotation";
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
  const selectButton = (
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
  );
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
          <div className="repair-part-wrapper">
            <PartDrawing
              kind={plan.tier === "Padrão" ? "analog" : "tmr"}
              showDirectionArrow={false}
            />
            <SketchAnnotation
              text={plan.tier === "Padrão" ? "essa entra" : "essa entra ↑"}
              direction="up-right"
              className="part-note"
            />
          </div>
          <span className="mono">
            {plan.tier === "Padrão" ? "ANALÓGICO" : "JOYSTICK TMR"}
          </span>
        </div>
      </div>
      <h3 className="part-name">
        <span>{plan.part}</span>
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
      {plan.recommended ? (
        <div className="repair-action-wrapper">
          <span className="hand plan-note recommended-note">{plan.note}</span>
          {selectButton}
        </div>
      ) : (
        <>
          <span className="hand plan-note">{plan.note}</span>
          {selectButton}
        </>
      )}
    </article>
  );
}
