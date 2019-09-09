import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavsliderComponent } from './navslider/navslider.component';
import { ProductsComponent } from './products/products.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminproductsComponent } from './admin/adminproducts/adminproducts.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
@NgModule({
  declarations: [
    AppComponent,
    NavsliderComponent,
    ProductsComponent,
    MyOrdersComponent,
    AdminproductsComponent,
    AdminOrdersComponent,
    ShoppingcartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
