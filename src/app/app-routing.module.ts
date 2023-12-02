import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { MainComponent } from './components/main/main.component';
import { DashbordComponent } from './components/dashbordPages/dashbord/dashbord.component';
import { listProduct } from './models/product/product';
import { ListProductComponent } from './components/productCrudPage/list-product/list-product.component';

const routes: Routes = [
  {
    path: '',
    component: SignInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'home',
    component: MainComponent,
    children: [
      {
        path: 'dashbord', 
        component: DashbordComponent
      },
      {
        path: 'products', 
        component: ListProductComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
