import { Validator } from './types';

export const smallCityValidator: Validator = (password) => {
  const SMALL_CITIES = [
    "pindamonhangaba",
    "araripina",
    "itapipoca",
    "caiapônia",
    "muricilândia",
    "poconé",
    "canguaretama",
  ];

  const found = SMALL_CITIES.some((city) =>
    password.toLowerCase().includes(city.toLowerCase())
  );

  if (!found) {
    return {
      ok: false,
      message: "Inclua o nome de uma cidade brasileira menos óbvia.",
    };
  }

  return { ok: true };
};
