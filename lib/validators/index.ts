import { animal } from "./animal";
import { author } from "./author";
import { emotion } from "./emotions";
import { food } from "./foods";
import { initialPasswordLetters } from "./initialLetters";
import { initialPasswordNumbers } from "./initialNumbers";
import { instrument } from "./instruments";
import { invention } from "./inventions";
import { mascot } from "./mascot";
import { meme } from "./meme";
import { musicGenre } from "./musicGenre";
import { river } from "./river";
import { slang } from "./slang";
import { smallTown } from "./smallCities";
import { sports } from "./sports";
import { stateUF } from "./stateUF";
import { tree } from "./tree";
import { tvShow } from "./tvShow";
import { Validator } from "./types";
import { weekday } from "./weekday";
import { worldCupWinner } from "./worldCupWinners";

export const VALIDATORS: Record<string, Validator> = {
  initialPasswordLetters,
  initialPasswordNumbers,
  emotion,
  stateUF,
  animal,
  sports,
  food,
  instrument,
  slang,
  mascot,
  meme,
  musicGenre,
  tvShow,
  tree,
  river,
  invention,
  worldCupWinner,
  author,
  smallTown,
  weekday,
};
