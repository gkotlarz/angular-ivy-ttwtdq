import { Injectable } from '@angular/core';

// importing _Class_ service from HttpClientModule provider (?) from package: '@angular/common/http'
import { HttpClient } from '@angular/common/http';

import { Product } from './products'

/** In Angular, a service is an instance of a class that you can make available to any part of your application 
 * using Angular's dependency injection system.
 */
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items : Product[] = [];

  // Inject HttpClient into the CartService constructor().
  constructor(private httpClient: HttpClient) { }

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

  gerShippingPrices() {
    return this.httpClient.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}
