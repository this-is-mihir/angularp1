import { Routes } from '@angular/router';
import { ProductPage } from './product-page/product-page';
import { UserPage } from './user-page/user-page';
import { CartPage } from './cart-page/cart-page';
import { LoginPage } from './auth/login-page/login-page';
import { SignupPage } from './auth/signup-page/signup-page';
import { BankPage } from './bank/bank-page/bank-page';
import { CounterCard } from './prac-signal/counter-card/counter-card';
import { AddProductPage } from './prac-signal/add-product-page/add-product-page';
import { ListPro } from './prac-signal/list-pro/list-pro';

export const routes: Routes = [
  { path: 'user', component: UserPage },
  { path: 'products', component: ProductPage },
  { path: 'cart', component: CartPage },
  { path: 'signup', component: SignupPage },
  { path: 'login', component: LoginPage },  
  { path: 'bank', component: BankPage },
  { path: 'counter', component: CounterCard },
  // { path: 'add-product', component: AddProductPage },
 
    {
    path: 'lists',
    
    children: [
      {
        path: '',
        component: ListPro,
      },
      {
        path: 'add',
        component: AddProductPage,
      },
      {
        path: ':id',
        component: AddProductPage,
      }
    ]

  }
  
];
