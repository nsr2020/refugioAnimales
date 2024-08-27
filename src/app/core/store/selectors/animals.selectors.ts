import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Animal } from "../../services/animals/animals.models";

const NUM_ANIMALS = 4;

export const selectAnimals = createFeatureSelector<Animal[]>('animals');

export const selectOlderAnimals = createSelector(
  selectAnimals,
  animals => {
    const animalsCopy = [...animals];
    return animalsCopy.sort((a, b) => b.edad - a.edad).slice(0, NUM_ANIMALS)
  }
);

export const selectAnimalById = (id: string) => createSelector(
  selectAnimals,
  (animals: Animal[]) => animals.find(animal => animal.id.toString() === id)
);
