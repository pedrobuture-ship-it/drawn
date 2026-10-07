import { useRepairQuoteTool } from "../hooks/useRepairQuoteTool";
import { m, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronDown, MessageCircle, Plus } from "lucide-react";
import { consoles, additionalRepairs } from "../data/controllers";
import type { RepairPlan } from "../types";
import { ConsoleTabs } from "../components/ConsoleTabs";
import { RepairCard } from "../components/RepairCard";
import { useRepairQuote } from "../context/RepairQuote";
import { SectionHeading } from "../components/SectionHeading";
import { useContactMessage } from "../context/RepairQuote";
import { WhatsAppCTA } from "../components/WhatsAppCTA";
export function ControllerServices() {
  const {
    quote: { consoleId, selected, extras },
    setQuote,
  } = useRepairQuote();
  const reduced = useReducedMotion();
  const message = useContactMessage("controles");
  const equipment = consoles.find((c) => c.id === consoleId)!;
  const selectPlan = (plan: RepairPlan) =>
    setQuote((quote) => ({ ...quote, selected: plan }));
  useRepairQuoteTool();
  return (
    <section
      tabIndex={-1}
      id="servicos"
      className="services section-space container"
    >
      <SectionHeading
        code="01 / SERVIÇOS PARA CONTROLES"
        title="Escolha quanto de precisão você quer."
        description="Selecione seu console, compare as peças e escolha o reparo. O próximo passo é conversar com quem vai cuidar do seu controle."
      />
      <ConsoleTabs
        value={consoleId}
        onChange={(next) =>
          setQuote((quote) => ({ ...quote, consoleId: next, selected: null }))
        }
      />
      <div
        id="console-plans"
        role="tabpanel"
        tabIndex={0}
        aria-labelledby={`tab-${consoleId}`}
      >
        <m.div
          key={consoleId}
          className={`plan-grid ${equipment.plans.length === 2 ? "two-plans" : ""}`}
          initial={reduced ? false : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduced ? 0 : 0.15 }}
        >
          {equipment.plans.map((plan, i) => (
            <RepairCard
              key={plan.tier}
              plan={plan}
              index={i}
              selected={selected?.tier === plan.tier}
              consoleName={equipment.name}
              onSelect={selectPlan}
            />
          ))}
        </m.div>
      </div>
      <details className="extras">
        <summary>
          <span>
            <Plus size={19} aria-hidden="true" />
            <span>OUTROS DEFEITOS / REPAROS ADICIONAIS</span>
          </span>
          <span className="extras-badge mono">
            SOB CONSULTA <ChevronDown size={16} aria-hidden="true" />
          </span>
        </summary>
        <div className="extras-content">
          <p>
            Selecione os problemas que também precisam de atenção. Os valores
            desses reparos são informados após o diagnóstico.
          </p>
          <div className="extras-grid">
            {additionalRepairs.map((extra) => (
              <label
                className={`extra-option ${extras.includes(extra.name) ? "checked" : ""}`}
                key={extra.name}
              >
                <input
                  type="checkbox"
                  checked={extras.includes(extra.name)}
                  onChange={(event) => {
                    const checked = event.currentTarget.checked;
                    setQuote((quote) => ({
                      ...quote,
                      extras: checked
                        ? [...quote.extras, extra.name]
                        : quote.extras.filter((x) => x !== extra.name),
                    }));
                  }}
                />
                <span>
                  <strong>{extra.name}</strong>
                  <span>{extra.description}</span>
                </span>
              </label>
            ))}
          </div>
        </div>
      </details>
      <div className="quote-summary" aria-live="polite">
        <div>
          <p className="mono">SUA FICHA DE REPARO</p>
          <h3>
            {selected
              ? `${equipment.name} · Reparo ${selected.tier}`
              : "Seu controle tem solução."}
          </h3>
          <p>
            {selected
              ? `${selected.part} · R$ ${selected.price}${extras.length ? ` + ${extras.length} reparo${extras.length > 1 ? "s" : ""} sob consulta` : ""}`
              : "Escolha um reparo acima ou fale com a gente para investigar o defeito."}
          </p>
        </div>
        <WhatsAppCTA className="button button-dark" message={message}>
          <MessageCircle size={17} aria-hidden="true" />
          {selected ? "PEDIR ORÇAMENTO" : "FALAR COM A OFICINA"}
          <ArrowUpRight size={17} aria-hidden="true" />
        </WhatsAppCTA>
      </div>
    </section>
  );
}
