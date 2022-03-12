import { Component, OnInit } from '@angular/core';

//Import the FormBuilder service from the @angular/forms package. This service provides convenient methods for generating controls.
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();

  // To gather the user's name and address, use the FormBuilder group() method to set the checkoutForm property to a form model containing name and address fields.
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  })

  // injecting Service with constructor.
  // FormbBuilder service is part of the ReactiveFormsModule module.
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // Process checkout data here.
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted.', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
