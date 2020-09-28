import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: any[] = [];

  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((prods: {count: number, products: any[]}) => {
      this.products = prods.products;
      console.log(this.products);
    });
  }

  selectProduct(id: number): void {
    this.router.navigate(['/product', id]).then();
  }

}
