import { Routes } from '@angular/router';
import { UserCard } from './user-card/user-card';
import { ProductCard } from './product-card/product-card';
import { ProductPage } from './product-page/product-page';
import { UserPage } from './user-page/user-page';
import { CartPage } from './cart-page/cart-page';

export const routes: Routes = [
  { path: 'user', component: UserPage },
  { path: 'products', component: ProductPage },
  { path: 'cart', component: CartPage }
];
