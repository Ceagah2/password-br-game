import { Validator } from "./types";

export const brazilianAnimalValidator: Validator = (password) => {
  const ANIMALS = [
    "capivara",
    "tamanduá",
    "onça",
    "arara",
    "jabuti",
    "paca",
    "boto",
  ];

  const found = ANIMALS.some((animal) =>
    password.toLowerCase().includes(animal.toLowerCase())
  );

  if (!found) {
    return {
      ok: false,
      message: "Inclua um animal brasileiro na sua senha.",
    };
  }

  return { ok: true };
};
