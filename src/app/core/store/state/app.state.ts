import { Animal } from "../../services/animals/animals.models";

export interface AppState {
  loading: boolean;
  animals: Animal[];
}

export const initialState: AppState = {
  loading: false,
  animals: []
};
