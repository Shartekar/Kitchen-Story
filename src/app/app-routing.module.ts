import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import {HomeComponent} from './components/home/home.component';
import {DetailComponent} from "./components/detail-component/detail-component.component"
import {SearchComponent} from "./components/search/search.component";
import { CartComponent } from './components/cart/cart.component';
import {CheckoutComponent} from "./components/checkout/checkout.component";
import { AddressComponent } from './components/address/address.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AddcakeComponent } from './components/addcake/addcake.component';

const routes: Routes = [
 {path:"login",component:LoginComponent },
 {path:"",component:HomeComponent},
 {path:"signup",component:SignupComponent},
 {path:"search",component:SearchComponent},
 {path:"detail/:cakeid",component:DetailComponent},
 {path:"addcake",component:AddcakeComponent},

 //Nested Components
 {path:"checkout",component:CheckoutComponent,
 children:[
  {path:"", component:AddressComponent},
 {path:"address" ,component:AddressComponent},
 {path:"payment",component:PaymentComponent}
 ]},

 {path:"cart",component:CartComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
