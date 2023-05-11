import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from 'src/app/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<Product[]>('/products');
  }
}
