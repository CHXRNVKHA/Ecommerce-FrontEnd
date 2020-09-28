import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient,
              private productService: ProductService) { }
}
