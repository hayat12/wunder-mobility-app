import { createReducer, on } from '@ngrx/store';
import { Address } from 'src/app/interface/address.interface';
import { setAddressInfo } from '../actions/address-information.actions';

export const initialState: Address = {
  street: "",
  houseNo: "",
  zipCode: "",
  city: "",
};

export const addressInformationReducer = createReducer(
  initialState,
  on(setAddressInfo, (state, { street, houseNo, zipCode, city }) => ({
    ...state,
    street,
    houseNo,
    zipCode,
    city,
  }))
);
