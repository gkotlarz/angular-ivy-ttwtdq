import { Component, VERSION } from '@angular/core';
import { Product, products } from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  products: Product[] = products;
}
