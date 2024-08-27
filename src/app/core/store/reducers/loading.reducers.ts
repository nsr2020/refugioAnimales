import { createReducer, on } from "@ngrx/store";
import { setLoading } from "../actions/loading.actions";


export const loadingReducer = createReducer(
  false,
  on(setLoading, (state, { loading }) => loading)
);
