import { createFeatureSelector } from "@ngrx/store";

export const selectLoading = createFeatureSelector<boolean>('loading');
