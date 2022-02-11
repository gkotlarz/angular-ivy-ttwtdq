import { Component, OnInit, Input } from '@angular/core';

import { Products } from '../products';

//decorator @Component
// The @Component() decorator indicates that the following class is a component
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  //The @Input() decorator indicates that the property value passes in from the component's parent, ProductListComponent.
  products!: Products;

  constructor() {}

  ngOnInit() {}
}
