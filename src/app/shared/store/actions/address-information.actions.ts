import { createAction, props } from '@ngrx/store';
import { Address } from 'src/app/interface/address.interface';

export const setAddressInfo = createAction(
  '[Address Information] Set Address Information',
  props<Address>()
);
