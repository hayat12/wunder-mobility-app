import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalComponent } from './pages/personal/personal.component';
import { AddressComponent } from './pages/address/address.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { SuccessComponent } from './pages/success/success.component';

const routes: Routes = [
  {
    path: "registration",
    children: [
      {
        path: "personal",
        component: PersonalComponent
      },
      {
        path: "address",
        component: AddressComponent
      },
      {
        path: "payment",
        component: PaymentComponent
      },
      {
        path: "success",
        component: SuccessComponent
      }
    ]
  },
  {
    path: "**",
    redirectTo: "registration/personal"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
