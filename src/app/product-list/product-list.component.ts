import { Component, OnInit, Input } from '@angular/core';
import { Products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Input() products!: Products;

  constructor() {}

  ngOnInit() {}

  share() {
    window.alert('share');
  }
}
