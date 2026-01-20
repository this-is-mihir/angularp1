import { Component, inject } from '@angular/core';
import { ProductService } from '../../product-service';
import { SignupCard } from "../signup-card/signup-card";

@Component({
  selector: 'app-signup-page',
  imports: [SignupCard],
  templateUrl: './signup-page.html',
  styleUrl: './signup-page.css',
})
export class SignupPage {
  producutService = inject(ProductService);

}
