import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './stepper/stepper.component';
import { StepComponent } from './step/step.component';
import { NavComponent } from './nav/nav.component';


const component = [StepperComponent, StepComponent, NavComponent]
@NgModule({
  declarations: component,
  imports: [
    CommonModule
  ],
  exports: component
})
export class ComponentModule { }
