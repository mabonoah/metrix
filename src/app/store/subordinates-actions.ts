import { createAction, props } from "@ngrx/store";
import { Subordinate } from "../modules/views/models";

const UPDATE_SUBORDINATES: string = 'UPDATE_SUBORDINATES';

export const updateSubordinates = createAction(UPDATE_SUBORDINATES, props<{subordinates:Subordinate[]}>());
