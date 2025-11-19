import { normalize } from "./normalize";
import { Validator } from "./types";

const AUTHORS = [
  "machadodeassis",
  "claricelispector",
  "jorgeamado",
  "carlosdrummond",
  "graciliano",
  "paulocoelho",
  "monteirolobato",
  "grazielanascimento"
];

export const author: Validator = (input) => {
  const n = normalize(input);
  const found = AUTHORS.some((a) => n.includes(a));
  return found
    ? { valid: true }
    : { valid: false, message: "Puxa na memoria. La no ensino medio voce precisou ler alguma coisa de algum autor Br." };
};
