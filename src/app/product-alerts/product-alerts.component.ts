import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { products, Product } from '../products';

// decorator @Component
// The @Component() decorator indicates that the following class is a component
// metadata about the component, including its selector, templates, and styles.
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})

// In new components, the Angular Generator includes an empty constructor(), the OnInit interface, and the ngOnInit() method.
export class ProductAlertsComponent implements OnInit {
  // The @Input() decorator indicates that the property value passes in from the component's parent, ProductListComponent.
  @Input()
  product!: Product;

  // Configuring ProductAlertsComponent with an @Output() allows the ProductAlertsComponent to emit an event when the value of the notify property changes.
  // <app-product-alerts 
  // [product]="product"
  // (notify)="onNotify()"> </app-product-alerts>
  @Output() 
  notify = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
