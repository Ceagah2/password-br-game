import { Validator } from "./types";

export const footballTeamValidator: Validator = (password) => {
  const TEAMS = [
    "flamengo",
    "vasco",
    "fluminense",
    "botafogo",
    "palmeiras",
    "corinthians",
    "santos",
    "grêmio",
    "internacional",
    "bahia",
    "sport",
  ];

  const found = TEAMS.some((team) =>
    password.toLowerCase().includes(team.toLowerCase())
  );

  if (!found) {
    return {
      ok: false,
      message: "Sua senha precisa homenagear algum time brasileiro.",
    };
  }

  return { ok: true };
};
