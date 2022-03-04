import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  // From StackOverflow both declartions below are equal. 
  //   This let variable be undefinied after constructor call, and lets this variable be injected by CDI
  // product!: Product;
  product: Product | undefined;

  // ActivatedRoute is specific to each component that the Angular Router loads. ActivatedRoute contains information about the route and the route's parameters.
  // By injecting ActivatedRoute, you are configuring the component to use a service. The Managing Data step covers services in more detail.
  // By injecting ActivatedRoute, you are configuring the component to use a service. 
  constructor(private route: ActivatedRoute) {
    // BTW. each time routing routes to component, 
    // constructor is called  - means new instance is created!
    console.log("ProductDetailsComponent constructor. ");
  }

  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute); 

    console.log("ProductDetailsComponent ngOnInit. ");
  }

}
