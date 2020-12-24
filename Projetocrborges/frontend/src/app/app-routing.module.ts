 import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './views/home/home.component';
import {ProductCrudComponent} from './views/product-crud/product-crud.component';
import {ProductCreateComponent } from './components/products/product-create/product-create.component';
import { ProductRead2Component } from './components/products/product-read2/product-read2.component';
import {ProductUpdateComponent} from './components/products/product-update/product-update.component'
const routes: Routes = [
  {path :"" , component : HomeComponent},
  {path :"products" , component : ProductCrudComponent},
  {path :"products/create" , component : ProductCreateComponent},
  {path :"products/read2" , component : ProductRead2Component},
  {path :"products/update/:id" , component : ProductUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
