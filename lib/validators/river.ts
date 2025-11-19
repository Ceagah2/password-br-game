import { normalize } from "./normalize";
import { Validator } from "./types";

const RIVERS = [
  "amazonas",
  "parana",
  "purus",
  "madeira",
  "saofrancisco",
  "paraguai",
  "tocantins",
  "jurua",
  "araguaia",
  "xingu",
  "parnaiba",
  "uruguai",
  "rionegro",
  "guapore",
  "ica",
  "riogrande",
  "iguacu",
  "juruema",
  "tiete",
  "paraiba",
  "solimoes",
  "una",
];

export const river: Validator = (input) => {
  const n = normalize(input);
  const found = RIVERS.some((r) => n.includes(r));
  return found
    ? { valid: true }
    : { valid: false, message: "Pode ser aquele fedido, ou aquela dupla sertaneja..." };
};
