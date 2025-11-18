import { getActiveRule } from "@/lib/getActiveRule";
import { PasswordRule } from "@/types/interface";
import { useState } from "react";

export function usePasswordGame(rules: PasswordRule[]) {
  const [password, setPassword] = useState<string>("");
  const [startTime] = useState<number>(Date.now());

  const activeRule = getActiveRule(password, rules);
  const completed = activeRule === null;

  return {
    password,
    setPassword,
    activeRule,
    completed,
    timeElapsed: completed ? Date.now() - startTime : null,
  };
}
