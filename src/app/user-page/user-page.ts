import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { UserCard } from '../user-card/user-card';
import { ProductService } from '../product-service';

@Component({
  selector: 'app-user-page',
  imports: [UserCard],
  templateUrl: './user-page.html',
  styleUrl: './user-page.css',
})
export class UserPage {
  producutService = inject(ProductService);
  user = toSignal(this.producutService.getUsers());

}
