import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Base } from '../base';
import { Router } from '@angular/router';
import { Payment } from 'src/app/interface/payment.interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setPaymentInfo } from 'src/app/shared/store/actions/payment-information.actions';
import { setStep } from 'src/app/shared/store/actions/step.actions';

@Component({
  selector: 'wc-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent extends Base implements OnInit{
  payment$: Observable<Payment>
  constructor(
    private store: Store<{ payment: Payment }>,
    private fb:FormBuilder, private router:Router){
    super();
    this.paymentForm();
    this.payment$ = store.select("payment")
  }

  ngOnInit(): void {
    this.payment$.subscribe({
      next: (data)=>{
        console.log("payment")
        this.form.patchValue({...data})
      }
    })
  }

  paymentForm() {
    this.form = this.fb.group({
      accountOwner: [null],
      iban: [null],
    });
  };
  onNextTo(){
    this.store.dispatch(setPaymentInfo(this.form.getRawValue()));
    this.store.dispatch(setStep({path: 'success', active: true}));
  }

  onBack(){
    this.store.dispatch(setStep({path: 'address', active: true}));
  }
}
