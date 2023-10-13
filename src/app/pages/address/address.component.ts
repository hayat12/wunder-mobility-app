import { Component, OnInit } from '@angular/core';
import { Base } from '../base';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setAddressInfo } from 'src/app/shared/store/actions/address-information.actions';
import { Address } from 'src/app/interface/address.interface';
import { Observable } from 'rxjs';
import { StepManager } from 'src/app/interface/step-manager.interface';
import { setStep } from 'src/app/shared/store/actions/step.actions';

@Component({
  selector: 'wc-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent extends Base implements OnInit{
  address$: Observable<Address>
  constructor(
    private store: Store<{ address: Address }>,
    private fb: FormBuilder, private router: Router) {
      super();
    this.address$ = store.select("address");
    this.addressForm();
  }

  ngOnInit(): void {
    this.address$.subscribe({
      next: (data)=>{
        this.form.patchValue({...data})
      }
    })
  }

  addressForm() {
    this.form = this.fb.group(
      {
        street: [null],
        houseNo: [null],
        zipCode: [null],
        city: [null],
      }
    );
  }

  onNextTo(){
    this.store.dispatch(setAddressInfo(this.form.getRawValue()));
    this.store.dispatch(setStep({path: 'payment', active: true}));
  }

  onBack(){
    this.store.dispatch(setStep({path: 'personal', active: true}));
  }
}
