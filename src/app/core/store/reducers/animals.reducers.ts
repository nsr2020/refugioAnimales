import { createReducer, on } from "@ngrx/store";

import { Animal } from "../../services/animals/animals.models";
import { setAnimals } from "../actions/animals.action";

export const animalReducer = createReducer(
  [] as Animal[],
  on(setAnimals, (state, { animals }) => animals)
);
