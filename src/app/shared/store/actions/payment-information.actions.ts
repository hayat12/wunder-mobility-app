import { createAction, props } from '@ngrx/store';
import { Payment } from 'src/app/interface/payment.interface';

export const setPaymentInfo = createAction(
  '[Payment Information] Set Payment Information',
  props<Payment>()
);
