import { useMemo } from "react";
import { flushSync } from "react-dom";
import { usePageTool } from "./usePageTool";
import { useRepairQuote } from "../context/RepairQuote";
import { consoles, additionalRepairs } from "../data/controllers";
import { whatsappUrl, planMessage } from "../utils/whatsapp";
export function useRepairQuoteTool() {
  const { setQuote } = useRepairQuote();
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
          setQuote({
            consoleId: consoleRepair.id,
            selected: plan,
            extras: additional,
          });
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
    [setQuote],
  );
  usePageTool(quoteTool);
}
