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
    console.log(this.products.length);
    console.log(this.products[0].name);
    console.log(this.products[0].description);
    //window.alert('share');
    console.log('manual update');
  }
}
 