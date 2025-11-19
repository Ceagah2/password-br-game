import { normalize } from "./normalize";
import { Validator } from "./types";

const INSTRUMENTS = [
  "berimbau",
  "pandeiro",
  "cuica",
  "cavaquinho",
  "agogô",
  "reco-reco",
  "tambor",
  "surdo",
  "cuíca",
  "cuica",
  "viola-caipira",
  "cavaquinho",
];

export const instrument: Validator = (input) => {
  const n = normalize(input);
  const found = INSTRUMENTS.some((i) => n.includes(i));
  return found
    ? { valid: true }
    : {
        valid: false,
        message: "Nunca viu uma roda de samba?.",
      };
};
