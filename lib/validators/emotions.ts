import { Validator } from "./types";

export const emotionValidator: Validator = (password) => {
  const EMOTIONS = [
    "felicidade",
     "tristeza",
      "raiva", 
      "medo",
      "nojo",
      "surpresa",
      "tedio",
      "ansiedade",
      "alegria",
      ];

  const found = EMOTIONS.some((emotion) =>
    password.toLowerCase().includes(emotion.toLowerCase())
  );

  if (!found) {
    return {
      ok: false,
      message: "Sua senha precisa expressar uma emoção básica humana.",
    };
  }

  return { ok: true };
};
