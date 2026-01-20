import { Component, input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-signup-card',
  imports: [RouterLink],
  templateUrl: './signup-card.html',
  styleUrl: './signup-card.css',
})
export class SignupCard {
signup = input<any>(); 
}
