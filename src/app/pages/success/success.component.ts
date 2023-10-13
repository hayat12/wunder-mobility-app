import { Component } from '@angular/core';
import { Base } from '../base';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Success } from 'src/app/interface/success.interface';
import { setSuccessInfo } from 'src/app/shared/store/actions/success-information.actions';
import { Observable } from 'rxjs';
import { setStep } from 'src/app/shared/store/actions/step.actions';

@Component({
  selector: 'wc-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent extends Base {

  success$: Observable<Success>
  constructor(
    private router: Router,
    private store: Store<{ success: Success }>,
    private fb:FormBuilder){super()
    this.successForm();
    this.success$ = store.select("success");
    }


  successForm() {
    this.form = this.fb.group({
      paymentDataId: [null],
      message: [null]
    });
  }
    onNextTo(){
      this.store.dispatch(setSuccessInfo(this.form.getRawValue()));
      this.store.dispatch(setStep({path: 'personal', active: true}))
    }
}
