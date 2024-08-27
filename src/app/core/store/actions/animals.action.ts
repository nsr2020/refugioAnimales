import { createAction, props } from "@ngrx/store";
import { Animal } from "../../services/animals/animals.models";

export const retrieveAnimals = createAction('[Animals] Retrieve Animals');

export const setAnimals = createAction(
  '[Animals] Set Animals',
  props<{ animals: Animal[] }>()
);

export const adoptAnimal = createAction(
  '[Animals] Adopt animal',
  props<{ animalId: string }>()
);
