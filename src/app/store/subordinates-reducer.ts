import { createReducer, on } from "@ngrx/store";
import { Subordinate } from "../modules/views/models";
import { updateSubordinates } from "./subordinates-actions";

export const initalState: Subordinate[] = [];

export const subordinatesReducer = createReducer(
  initalState,
  on(updateSubordinates, (state: Subordinate[], newData: { subordinates: Subordinate[] }) => {
    const subordinatesClone: Subordinate[] = JSON.parse(JSON.stringify(newData.subordinates));
    return subordinatesClone;
  })
)
