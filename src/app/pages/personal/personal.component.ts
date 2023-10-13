import { Component, OnInit } from '@angular/core';
import { Base } from '../base';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Personal } from 'src/app/interface/personal.interface';
import { Observable } from 'rxjs';
import { setPersonalInfo } from 'src/app/shared/store/actions/personal-information.actions';
import { setStep } from 'src/app/shared/store/actions/step.actions';

@Component({
  selector: 'wc-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent extends Base implements OnInit{
  personal$: Observable<Personal>
  constructor(
    private fb:FormBuilder, private router:Router,
    private store: Store<{ personal: Personal }>
    ){
      super();
    this.personalForm();
    this.personal$ = store.select("personal");
  }

  ngOnInit(): void {
    this.personal$.subscribe({
      next: (data)=>{
        this.form.patchValue({...data})
      }
    })
  }



  personalForm() {
    this.form = this.fb.group({
      firstName: [null],
      lastName: [null],
      telephone: [null],
    });
  };

  onNextTo(){
    this.store.dispatch(setPersonalInfo(this.form.getRawValue()));
    this.store.dispatch(setStep({path: 'address', active: true}));
    this.router.navigate(['registration/address']);
  }
}
