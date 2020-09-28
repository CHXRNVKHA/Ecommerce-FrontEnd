import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private SERVER_URL = environment.SERVER_URL;
  constructor(private http: HttpClient) { }

  getAllProducts(numberOfResults = 10): Observable<any> {
    return this.http.get(this.SERVER_URL + '/products', {
      params: {
        limit: numberOfResults.toString(),
      }
    });
  }
}
