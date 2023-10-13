import { createReducer, on } from '@ngrx/store';
import { Payment } from 'src/app/interface/payment.interface';
import { setPaymentInfo } from '../actions/payment-information.actions';

export const initialState: Payment = {
  accountOwner: '',
  iban: '',
};

export const paymentInformationReducer = createReducer(
  initialState,
  on(setPaymentInfo, (state, { accountOwner, iban }) => ({
    ...state,
    accountOwner,
    iban,
  }))
);
