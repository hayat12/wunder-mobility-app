import { createAction, props } from '@ngrx/store';
import { StepManager } from 'src/app/interface/step-manager.interface';

export const setStep = createAction(
  '[Step Manager] Set Step Manager',
  props<StepManager>()
);
