import { useMemo, useState } from "react";
import { flushSync } from "react-dom";
import { usePageTool } from "../hooks/usePageTool";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleCheck,
  MessageCircle,
  Plus,
  ShieldCheck,
} from "lucide-react";
import { consoles, additionalRepairs } from "../data/services";
import type { ConsoleId, RepairPlan } from "../types";
import { SectionHeading } from "../components/SectionHeading";
import { planMessage, whatsappUrl } from "../utils/whatsapp";
export function ControllerServices() {
  const [consoleId, setConsoleId] = useState<ConsoleId>("ps5");
  const [selected, setSelected] = useState<RepairPlan | null>(null);
  const [extras, setExtras] = useState<string[]>([]);
  const equipment = consoles.find((c) => c.id === consoleId)!;
  const selectPlan = (plan: RepairPlan) => setSelected(plan);
  const quoteTool = useMemo(
    () => ({
      name: "configure_repair_quote",
      description:
        "Seleciona console, plano e reparos adicionais na ficha visível. Retorna o link com mensagem preparada; não abre o WhatsApp nem envia a mensagem.",
      inputSchema: {
        type: "object",
        properties: {
          consoleId: {
            type: "string",
            enum: ["ps5", "ps4", "xbox", "xbox360"],
          },
          tier: { type: "string", enum: ["Padrão", "Avançado", "Premium"] },
          extras: {
            type: "array",
            items: {
              type: "string",
              enum: additionalRepairs.map((r) => r.name),
            },
            uniqueItems: true,
          },
        },
        required: ["consoleId", "tier", "extras"],
        additionalProperties: false,
      },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute(input: unknown) {
        const value = input as {
          consoleId?: unknown;
          tier?: unknown;
          extras?: unknown;
        } | null;
        const consoleRepair = consoles.find((c) => c.id === value?.consoleId);
        const plan = consoleRepair?.plans.find((p) => p.tier === value?.tier);
        if (
          !consoleRepair ||
          !plan ||
          !Array.isArray(value?.extras) ||
          value.extras.some(
            (x) =>
              typeof x !== "string" ||
              !additionalRepairs.some((r) => r.name === x),
          )
        )
          throw new Error("Console, plano ou adicional inválido.");
        const additional = [...new Set(value.extras)] as string[];
        flushSync(() => {
          setConsoleId(consoleRepair.id);
          setSelected(plan);
          setExtras(additional);
        });
        return {
          equipment: consoleRepair.name,
          tier: plan.tier,
          price: plan.price,
          extras: additional,
          whatsappUrl: whatsappUrl(
            planMessage(consoleRepair.name, plan, additional),
          ),
          status: "mensagem_preparada",
        };
      },
    }),
    [],
  );
  usePageTool(quoteTool);
  return (
    <section id="servicos" className="services section-space container">
      <SectionHeading
        code="01 / SERVIÇOS PARA CONTROLES"
        title="Escolha quanto de precisão você quer."
        description="Selecione seu console, compare as peças e escolha o reparo. O próximo passo é conversar com quem vai cuidar do seu controle."
      />
      <div
        className="console-tabs"
        role="tablist"
        aria-label="Modelo do console"
      >
        {consoles.map((c) => (
          <button
            id={`tab-${c.id}`}
            key={c.id}
            role="tab"
            aria-selected={c.id === consoleId}
            aria-controls="console-plans"
            tabIndex={c.id === consoleId ? 0 : -1}
            className={c.id === consoleId ? "active" : ""}
            onClick={() => {
              setConsoleId(c.id);
              setSelected(null);
            }}
            onKeyDown={(e) => {
              if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key))
                return;
              e.preventDefault();
              const idx = consoles.findIndex((c) => c.id === consoleId);
              const next =
                e.key === "Home"
                  ? 0
                  : e.key === "End"
                    ? consoles.length - 1
                    : (idx +
                        (e.key === "ArrowRight" ? 1 : -1) +
                        consoles.length) %
                      consoles.length;
              setConsoleId(consoles[next].id);
              setSelected(null);
              document.getElementById(`tab-${consoles[next].id}`)?.focus();
            }}
          >
            {c.label}
          </button>
        ))}
      </div>
      <div
        id="console-plans"
        role="tabpanel"
        aria-labelledby={`tab-${consoleId}`}
      >
        <motion.div
          key={consoleId}
          className={`plan-grid ${equipment.plans.length === 2 ? "two-plans" : ""}`}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          {equipment.plans.map((plan, i) => (
            <article
              className={`plan-card ${plan.recommended ? "recommended" : ""} ${selected?.tier === plan.tier ? "selected" : ""}`}
              key={plan.tier}
            >
              {plan.recommended && (
                <span className="recommend-label mono">
                  MELHOR CUSTO-BENEFÍCIO
                </span>
              )}
              <div className="plan-top mono">
                <span>RP-0{i + 1}</span>
                <span>{plan.tier.toUpperCase()}</span>
              </div>
              <div className="plan-price">
                <span>R$</span>
                <strong>{plan.price}</strong>
              </div>
              <h3>{plan.part}</h3>
              <p className="plan-warranty">
                <ShieldCheck size={17} />
                {plan.warranty}
              </p>
              <ul>
                {plan.features.map((f) => (
                  <li key={f}>
                    <Check size={15} />
                    {f}
                  </li>
                ))}
              </ul>
              <span className="hand plan-note">{plan.note}</span>
              <button
                className={`button ${plan.recommended ? "button-dark" : ""}`}
                onClick={() => selectPlan(plan)}
                aria-pressed={selected?.tier === plan.tier}
              >
                {selected?.tier === plan.tier
                  ? "REPARO SELECIONADO"
                  : "SELECIONAR REPARO"}
                {selected?.tier === plan.tier ? (
                  <CircleCheck size={17} />
                ) : (
                  <Plus size={17} />
                )}
              </button>
            </article>
          ))}
        </motion.div>
      </div>
      <details className="extras">
        <summary>
          <span>
            <Plus size={19} />
            <span>OUTROS DEFEITOS / REPAROS ADICIONAIS</span>
          </span>
          <span className="extras-badge mono">
            SOB CONSULTA <ChevronDown size={16} />
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
                  onChange={(e) =>
                    setExtras(
                      e.target.checked
                        ? [...extras, extra.name]
                        : extras.filter((x) => x !== extra.name),
                    )
                  }
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
        <a
          className="button button-dark"
          href={whatsappUrl(
            selected
              ? planMessage(equipment.name, selected, extras)
              : `Olá! Gostaria de um diagnóstico para meu controle de ${equipment.name}.${extras.length ? `\n\nProblemas adicionais:\n${extras.join("\n")}` : ""}`,
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={17} />
          {selected ? "PEDIR ORÇAMENTO" : "FALAR COM A OFICINA"}
          <ArrowUpRight size={17} />
        </a>
      </div>
    </section>
  );
}
