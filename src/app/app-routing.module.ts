import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CheckoutComponent } from 'src/app/components/checkout/checkout.component';
import { ProductListComponent } from './components/product-list/product-list.component';


const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'checkout', component: CheckoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
