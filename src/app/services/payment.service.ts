import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../interface/payment.interface';
import { PaymentPayload } from '../interface/payment-payload.interface';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  readonly baseUrl:string = environment.apiBaseUrl;
  constructor(private http:HttpClient) { }

  confirmPayment(payment: Payment):Observable<any>{
    const payload: PaymentPayload = {
      ...payment,
      customerId: 1
    }
    return this.http.post(`${this.baseUrl}/default/wunderfleet-recruiting-backend-dev-save-payment-data`, payload);
  }

  // doSomething
}
