import { createReducer, on } from '@ngrx/store';
import { StepManager } from 'src/app/interface/step-manager.interface';
import { setStep } from '../actions/step.actions';

export const initialState: StepManager = {
  active: false,
  path: '',
};

export const stepReducer = createReducer(
  initialState,
  on(setStep, (state, { path, active }) => ({
    ...state,
    path,
    active
  }))
);
