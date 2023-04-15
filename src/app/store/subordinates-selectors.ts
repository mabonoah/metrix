import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Subordinate } from "../modules/views/models";

export const selectSubordinates = createSelector(
  createFeatureSelector('subordinates'),
  (state: Subordinate[]) => state
);
