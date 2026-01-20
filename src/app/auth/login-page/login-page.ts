import { Component, inject } from '@angular/core';
import { ProductService } from '../../product-service';
import { LoginCard } from "../login-card/login-card";

@Component({
  selector: 'app-login-page',
  imports: [LoginCard],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  producutService = inject(ProductService);

}
