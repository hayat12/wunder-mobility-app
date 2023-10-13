import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Step } from './interface/step.interface';

@Component({
  selector: 'wc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Wunder Mobility';
  constructor(private router:Router){}

  parentFun(step:Step){
    this.router.navigate(['registration/'+step.path])
  }
}
