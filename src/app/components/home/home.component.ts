import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './../../services/product.service';
import { ProductModelServer, ServerResponse } from './../../models/product.model';
import { CartService } from './../../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: ProductModelServer[] = [];

  constructor(private productService: ProductService,
              private cartService: CartService,
              private router: Router) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((prods: ServerResponse) => {
      this.products = prods.products;
      console.log(this.products);
    });
  }

  selectProduct(id: number): void {
    this.router.navigate(['/product', id]).then();
  }

  addToCart(id: number): void {
    this.cartService.addProductToCart(id);
  }
}
