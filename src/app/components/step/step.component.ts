import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Step } from 'src/app/interface/step.interface';

@Component({
  selector: 'wc-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent {
  constructor(private router:Router){}
  @Input({required: true}) step!:Step;
  @Input({required: true}) count!:number;

  next(step:Step){
    this.router.navigate(['registration/'+step.path])
  }
}
