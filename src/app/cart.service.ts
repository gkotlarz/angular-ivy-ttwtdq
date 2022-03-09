import { Injectable } from '@angular/core';
import { Product } from './products'

/** In Angular, a service is an instance of a class that you can make available to any part of your application 
 * using Angular's dependency injection system.
 */
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items : Product[] = [];
  constructor() { }

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
