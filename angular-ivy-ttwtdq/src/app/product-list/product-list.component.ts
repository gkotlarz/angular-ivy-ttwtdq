import { Component, OnInit, Input } from '@angular/core';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[] = products;

  constructor() {
    console.log(this.products);
  }

  ngOnInit() {
    console.log(this.products);
  }

  share() {
    console.log(this.products);
    window.alert("The product has been shared! ");
  }

  onNotify() {
    console.log("onNotify() called");
    window.alert('You will be notified when the product goes on sale');
  }
}
 