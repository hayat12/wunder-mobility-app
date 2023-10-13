import { createAction, props } from '@ngrx/store';
import { Success } from 'src/app/interface/success.interface';

export const setSuccessInfo = createAction(
  '[Success Information] Set Success Information',
  props<Success>()
);
