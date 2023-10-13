import { createAction, props } from '@ngrx/store';
import { Personal } from 'src/app/interface/personal.interface';

export const setPersonalInfo = createAction(
  '[Personal Information] Set Personal Information',
  props<Personal>()
);
