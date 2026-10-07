import type { ConsoleRepair, RepairPlan } from "../types";
const standard = (
  warranty: string,
  note = "resolve, mas pode voltar",
): RepairPlan => ({
  tier: "Padrão",
  price: 80,
  part: "Joystick Alps Original",
  warranty,
  features: ["Substituição do analógico", "Calibração e teste"],
  note,
});
const advanced = (
  part: string,
  warranty = "1 ano de garantia contra drift",
): RepairPlan => ({
  tier: "Avançado",
  price: 110,
  part,
  warranty,
  features: ["Tecnologia TMR", "Calibração e teste"],
  note: "eu iria nesse",
  recommended: true,
});
const premium = (xbox = false): RepairPlan => ({
  tier: "Premium",
  price: 150,
  part: "Joystick TMR K-Silver JS13 Pro+",
  warranty: "1 ano de garantia contra drift",
  features: xbox
    ? ["Padrão Elite", "Alta precisão", "Calibração e teste"]
    : ["Tecnologia TMR", "Máxima precisão", "Calibração e teste"],
  note: "precisão máxima ↑",
});
export const consoles: ConsoleRepair[] = [
  {
    id: "ps5",
    label: "PLAYSTATION 5",
    name: "PlayStation 5",
    plans: [
      standard("Sem garantia contra drift futuro."),
      advanced("Joystick TMR Ginfull R313"),
      premium(),
    ],
  },
  {
    id: "ps4",
    label: "PLAYSTATION 4",
    name: "PlayStation 4",
    plans: [
      standard("Sem garantia"),
      advanced("Joystick TMR K-Silver JS13 Pro+"),
    ],
  },
  {
    id: "xbox",
    label: "XBOX SERIES / ONE",
    name: "Xbox Series S/X e One",
    plans: [
      standard("Sem garantia"),
      advanced("Joystick TMR Ginfull R313"),
      premium(true),
    ],
  },
  {
    id: "xbox360",
    label: "XBOX 360",
    name: "Xbox 360",
    plans: [
      standard("Sem garantia"),
      advanced("Joystick TMR", "1 ano contra drift"),
    ],
  },
];
export const additionalRepairs = [
  { name: "Troca de Botões", description: "R1, R2, L1, L2, D-Pad" },
  { name: "Reparo na Porta USB-C", description: "Não carrega ou está solta" },
  { name: "Reparo de Placa Mãe", description: "Não liga / desconecta" },
  {
    name: "Troca de Carcaça",
    description: "Carcaça quebrada ou personalizada",
  },
  { name: "Troca de Bateria", description: "Não segura carga" },
];
