// example.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchAll, switchMap, withLatestFrom } from 'rxjs/operators';
import { PaymentService } from 'src/app/services/payment.service';
import { setPaymentInfo } from '../actions/payment-information.actions';
import { setAddressInfo } from '../actions/address-information.actions';
import { setPersonalInfo } from '../actions/personal-information.actions';
import { Personal } from 'src/app/interface/personal.interface';
import { Address } from 'src/app/interface/address.interface';
import { Payment } from 'src/app/interface/payment.interface';
import { initialState as personalInitialState } from '../reducer/personal-information.reducer';
import { initialState as addressInitialState } from '../reducer/address-information.reducer';
import { initialState as paymentInitialState } from '../reducer/payment-information.reducer';
import { Observable, of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { setSuccessInfo } from '../actions/success-information.actions';

@Injectable()
export class PaymentEffects {
  payment$: Observable<Payment>;
  address$: Observable<Address>;
  personal$: Observable<Personal>;

  constructor(
    private store: Store<{ payment: Payment, address: Address, personal: Personal }>,
    private actions$: Actions, private paymentService: PaymentService) {
    this.payment$ = this.store.select("payment");
    this.address$ = this.store.select("address");
    this.personal$ = this.store.select("personal");
  }

  doPayment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setPaymentInfo),
      withLatestFrom(
        this.store.pipe(select('payment')),
        // this.store.pipe(select('address')),
        // this.store.pipe(select('personal'))
      ),
      switchMap(([action, payment]) => {
        // Now you can use the action if needed
        console.log('Received action:', action);

        // Use the data object in your request
        return this.paymentService.confirmPayment(payment).pipe(
          map((response) => setSuccessInfo({ message: "Payment success", paymentDataId: response.paymentDataId, success: true })),
          catchError((error) => of(setSuccessInfo({ message: error.message || "Network Error!", paymentDataId: "", success: false })))
        );
      })
    )
  );


}
