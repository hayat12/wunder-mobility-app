import { createReducer, on } from '@ngrx/store';
import { Success } from 'src/app/interface/success.interface';
import { setSuccessInfo } from '../actions/success-information.actions';

export const initialState: Success = {
  success: false,
  message: '',
  paymentDataId: '',
};

export const successInformationReducer = createReducer(
  initialState,
  on(setSuccessInfo, (state, { message, paymentDataId, success }) => ({
    ...state,
    message,
    success,
    paymentDataId,
  }))
);
