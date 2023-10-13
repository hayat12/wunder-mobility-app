import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentModule } from './components/component.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HandleHttpInterceptor } from './interceptor/handle-http-interceptor';
import { personalInformationReducer } from './shared/store/reducer/personal-information.reducer';
import { addressInformationReducer } from './shared/store/reducer/address-information.reducer';
import { paymentInformationReducer } from './shared/store/reducer/payment-information.reducer';
import { successInformationReducer } from './shared/store/reducer/success-information.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PersonalComponent } from './pages/personal/personal.component';
import { AddressComponent } from './pages/address/address.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { SuccessComponent } from './pages/success/success.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentEffects } from './shared/store/effects/payment.effects';
import { stepReducer } from './shared/store/reducer/step-manager.reducer';

@NgModule({
  declarations: [
    AppComponent,
    PersonalComponent,
    AddressComponent,
    PaymentComponent,
    SuccessComponent,
  ],
  imports: [
    BrowserModule,
    ComponentModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
      autoPause: true,
      features: {
        pause: false,
        lock: true,
        persist: true
      }
    }),
    StoreModule.forRoot({
      personal: personalInformationReducer,
      address:addressInformationReducer,
      payment: paymentInformationReducer,
      success: successInformationReducer,
      step: stepReducer
    }, {}
      ),
    EffectsModule.forRoot([PaymentEffects])
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HandleHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
