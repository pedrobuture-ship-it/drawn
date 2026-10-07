import { createContext, useContext, useMemo, useState } from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import type { ConsoleId, Mode, RepairPlan } from "../types";
import { consoles } from "../data/controllers";
import { planMessage } from "../utils/whatsapp";

export interface RepairQuote {
  consoleId: ConsoleId;
  selected: RepairPlan | null;
  extras: string[];
}
const QuoteContext = createContext<{
  quote: RepairQuote;
  setQuote: Dispatch<SetStateAction<RepairQuote>>;
} | null>(null);

export function RepairQuoteProvider({ children }: { children: ReactNode }) {
  const [quote, setQuote] = useState<RepairQuote>({
    consoleId: "ps5",
    selected: null,
    extras: [],
  });
  const value = useMemo(() => ({ quote, setQuote }), [quote]);
  return (
    <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>
  );
}

export function useRepairQuote() {
  const value = useContext(QuoteContext);
  if (!value) throw new Error("Ficha de reparo indisponível.");
  return value;
}

export function useContactMessage(mode: Mode) {
  const { quote } = useRepairQuote();
  if (mode === "drones")
    return "Olá! Gostaria de enviar meu drone para diagnóstico.";
  const equipment = consoles.find((c) => c.id === quote.consoleId)!;
  return quote.selected
    ? planMessage(equipment.name, quote.selected, quote.extras)
    : `Olá! Gostaria de um diagnóstico para meu controle de ${equipment.name}.${quote.extras.length ? `\n\nProblemas adicionais:\n${quote.extras.join("\n")}` : ""}`;
}
