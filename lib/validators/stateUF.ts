import { Validator } from "./types";

const UFS = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
];

export const stateUF: Validator = (input) => {
  // Validação: aceita se alguma sigla (maiúscula exata) aparece como substring em qualquer posição
  for (const uf of UFS) {
    if (input.includes(uf)) {
      return { valid: true };
    }
  }
  return {
    valid: false,
    message: "Inclua a sigla de um estado (ex: SP, RJ, MG). Use maiúsculas.",
  };
};
