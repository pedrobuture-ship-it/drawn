export type Mode = "drones" | "controles";
export type ConsoleId = "ps5" | "ps4" | "xbox" | "xbox360";
export interface RepairPlan {
  tier: "Padrão" | "Avançado" | "Premium";
  price: number;
  part: string;
  warranty: string;
  features: string[];
  note: string;
  recommended?: boolean;
}
export interface ConsoleRepair {
  id: ConsoleId;
  label: string;
  name: string;
  plans: RepairPlan[];
}
