import { Action, ActionReducer } from "@ngrx/store";
import { AppState } from "./state/app.state";


const START_LOADING_ACTIONS = [
  '[Animals] Retrieve Animals',
  '[Animals] Adopt Animal',
];

const STOP_LOADING_ACTIONS = [
  '[Animals] Set Animals',
];

export const handleLoadingReducer = (reducer: ActionReducer<AppState>): ActionReducer<AppState> => {
  return (state: AppState | undefined, action: Action) => {
    const newState = reducer(state, action);
    if (START_LOADING_ACTIONS.includes(action.type)) {
      return {
        ...newState,
        loading: true
      };
    } else if (STOP_LOADING_ACTIONS.includes(action.type)) {
      return {
        ...newState,
        loading: false
      };
    } else {
      return newState;
    }
  };
}
