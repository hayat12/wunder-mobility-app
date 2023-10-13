import { Payment } from "./payment.interface";

export interface PaymentPayload extends Payment{
  customerId:number
}
