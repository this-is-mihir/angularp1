import { Component, inject, input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { ProductService } from '../../product-service';



@Component({
  selector: 'app-bank-card',
  imports: [ReactiveFormsModule],
  templateUrl: './bank-card.html',
  styleUrl: './bank-card.css',
})
export class BankCard {
  productsService = inject(ProductService);
bankCard = input<any>(); 

fb = inject(FormBuilder);

bankData: any ;

bankForm = this.fb.group({

  ifscCode: ['', [Validators.required, Validators.pattern('^[A-Z]{4}0[A-Z0-9]{6}$')]],


})
  

async onSubmit() {
  try {
    if (this.bankForm.invalid) {
      alert('Please fill in all required fields correctly.');
      return;
    }

    let data = this.bankForm.value;

    let response = await firstValueFrom(this.productsService.banklogin(data)); 
  
    console.log('Bank Details:', response);

    this.bankData = response;

    alert("login susscessfull");

}
  catch (error: any) {
    console.error(error);
    if(error?.error?.message){
      alert(error.error.message);
    }
}
}
}