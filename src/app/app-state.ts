import { Address } from "./interface/address.interface";
import { Payment } from "./interface/payment.interface";
import { Personal } from "./interface/personal.interface";
import { Success } from "./interface/success.interface";

// app-state.ts
export interface AppState {
  personal: Personal;
  address: Address;
  payment: Payment;
  success: Success;
}
