import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ClientComponent } from './client/client.component';
import { WebComponent } from './web/web.component';
import { PaymentComponent } from './payment/payment.component';
import { FlutterwaveModule } from 'flutterwave-angular-v3';


@NgModule({
  declarations: [
    AppComponent,
    WebComponent,
    ClientComponent,
    HomePageComponent,
    ItemListComponent,
    ErrorPageComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlutterwaveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
