import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor() {
    // BTW. each time routing routes to component, 
    // constructor is called  - means new instance is created!
    console.log("ProductDetailsComponent constructor. ");
  }

  ngOnInit(): void {
  }

}
