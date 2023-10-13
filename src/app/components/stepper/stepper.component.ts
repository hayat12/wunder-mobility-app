import { Component, OnInit, ViewChild } from '@angular/core';
import { Step } from 'src/app/interface/step.interface';
import { StepComponent } from '../step/step.component';
import { Success } from 'src/app/interface/success.interface';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { StepManager } from 'src/app/interface/step-manager.interface';
import { setStep } from 'src/app/shared/store/actions/step.actions';

@Component({
  selector: 'wc-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit{
  success$: Observable<Success>
  @ViewChild(StepComponent) stepComponent!:StepComponent;
  step$: Observable<StepManager> = of();
  constructor( private store: Store<{ success: Success, step: StepManager }>, private router: Router){
    this.success$ = store.select("success");
    this.step$ = store.select("step");
  }

  ngOnInit(): void {
      const url = window.location.href;
      this.steps = this.steps.map((s)=>{
        // if(url.includes(s.path)){
        //   this.store.dispatch(setStep({path: s.path, active: true}))
        // }
        return {
          ...s,
          className: url.includes(s.path)? "current-item": ""
        }
      });

      this.step$.subscribe((step:StepManager)=>{
        console.log(step)
        if (step && step.path) {
          this.toNextStep(this.steps.filter((o)=>o.path==step.path)[0])
        }
      })
  }

  steps: Step[] = [
    { className: "", path: "personal", title: 'Personal', icon: "personal_injury", message: 'Enter your personal info', component: null },
    { className: "", path: "address", title: 'Address', icon: "home", message: 'Enter your address', component: null },
    { className: "", path: "payment", title: 'Payment', icon: "credit_score", message: 'Provide payment details', component: null },
    { className: "", path: "success", title: 'Success', icon: "check_circle", message: 'Thank you for your submission', component: null },
  ];

  toNextStep(step:Step, indexNo:number=1){
    this.steps = this.steps.map((s)=>{
      return {
        ...s,
        className: s.path ==step.path? "current-item": ""
      }
    });
    this.stepComponent.next(step);
  }

}
