import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ItemListComponent } from './item-list/item-list.component';
import { PaymentComponent } from './payment/payment.component';
import { WebComponent } from './web/web.component';

const routes: Routes = [
  {
      path: '',
      pathMatch: 'full',
      redirectTo: 'web',
  },
  {
      path: 'web',
      component: WebComponent,
      children: [
          {path: '', redirectTo: 'home', pathMatch: 'full'},
          {path: 'home', component: HomePageComponent},
      ]
  },
  
  {
      path: '',
      pathMatch: 'full',
      redirectTo: 'client',
  },
  {
      path: 'client',
      component: ClientComponent,
      children: [
          {path: '', redirectTo: 'item-list', pathMatch: 'full'},
          {path: 'item-list', component: ItemListComponent},
          {path: 'payment', component: PaymentComponent}
      ]
  },
  {
      path: 'error',
      component: ErrorPageComponent,
  },
  {
      path: '**',
      pathMatch: 'full',
      component: ErrorPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
