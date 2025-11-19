import { normalize } from "./normalize";
import { Validator } from "./types";

const MASCOTS = [
  "willie",
  "juanito",
  "tiptap",
  "gauchito",
  "naranjito",
  "pique",
  "ciao",
  "striker",
  "footix",
  "kaz",
  "ato",
  "nik",
  "goleoiv",
  "pille",
  "zakumi",
  "fuleco",
  "zabivaka",
  "laeeb",
  "maple",
  "zayu",
  "clutch",
];

export const mascot: Validator = (input) => {
  const n = normalize(input);
  const found = MASCOTS.some((m) => n.includes(m));
  return found
    ? { valid: true }
    : {
        valid: false,
        message: "O mais legal da copa é o mascote. Como voce nao conhece ? Nem o paninho?",
      };
};
