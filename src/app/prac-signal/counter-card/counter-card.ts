import { Component, computed, effect, signal } from '@angular/core';
import { compatForm } from '@angular/forms/signals/compat';

@Component({
  selector: 'app-counter-card',
  imports: [],
  templateUrl: './counter-card.html',
  styleUrl: './counter-card.css',
})
export class CounterCard {

  counter = signal(0);

  countersqr = computed(() => this.counter() * this.counter());

  plus() {
    this.counter.update((prev) => prev + 1);
  }

  minus() {
    this.counter.update((prev) => prev - 1);  
  }
}

