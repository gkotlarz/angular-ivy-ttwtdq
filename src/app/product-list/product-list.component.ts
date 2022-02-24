import { Component, OnInit, Input } from '@angular/core';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Input() products = products;
  @Input() products2: Product[] = products;

  constructor() {
    console.log(this.products2);
  }

  ngOnInit() {
    console.log(this.products2);
  }

  share() {
    console.log(this.products2);
    console.log(this.products2.length);
    console.log(this.products2[0].name);
    console.log(this.products2[0].description);
    //window.alert('share');
  }
}
 