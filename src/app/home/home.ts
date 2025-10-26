import { Component } from '@angular/core';
import { ProductsService } from '../services/products';
import { Products } from '../../types';


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  constructor(private productsService: ProductsService) {}

  // called when the component is initialized/called
  ngOnInit() {
    console.log('Home component initialized');
    this.productsService
      .getProducts('http://localhost:3000/clothes', { page: 0, perPage: 5 }) // returns an Observable which we subscribe to
      .subscribe((products:Products) => {
        console.log('Fetched products:', products.items);
      });
  }
}
