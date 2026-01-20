import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../product-service';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';

@Component({
  selector: 'app-login-card',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login-card.html',
  styleUrl: './login-card.css',
})
export class LoginCard {
  productsService = inject(ProductService);
  fb = inject(FormBuilder);

  loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  async onSubmit() {
    try {
      if (this.loginForm.invalid) {
        alert('Please fill in all required fields correctly.');
        return;
      }

      let data = this.loginForm.value;

      let response = await firstValueFrom(this.productsService.login(data));

      console.log('login details:', response);

      alert('login susscessfull');
    } catch (error: any) {
      console.error(error);
      if (error?.error?.message) {
        alert(error.error.message);
      }
    }
  }
}
