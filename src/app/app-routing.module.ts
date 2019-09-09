import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminproductsComponent } from './admin/adminproducts/adminproducts.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';


const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: 'orders', component: MyOrdersComponent},
  {path: 'admin/orders', component: AdminOrdersComponent},
  {path: 'admin/products', component: AdminproductsComponent},
  {path: 'shopping-cart', component: ShoppingcartComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
