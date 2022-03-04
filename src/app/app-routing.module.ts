import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: "", component: ProductListComponent },
  { path: "products/:productId", component: ProductDetailsComponent },
  { path: "hello", component: HelloComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]  // <router-outlet></router-outlet>
})
export class AppRoutingModule { }
