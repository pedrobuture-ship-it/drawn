import type { RepairPlan } from "../types";
import { business } from "../data/business";
export const whatsappUrl = (message: string) =>
  `https://wa.me/${business.phone}?text=${encodeURIComponent(message)}`;
export function planMessage(
  consoleName: string,
  plan: RepairPlan,
  extras: string[],
) {
  return `Olá, gostaria de fazer um orçamento para meu ${consoleName}.\n\nServiço:\nReparo ${plan.tier}\n\nPeça:\n${plan.part}\n\nValor informado:\nR$ ${plan.price}\n\nProblemas adicionais:\n${extras.length ? extras.join("\n") : "Nenhum selecionado"}`;
}
