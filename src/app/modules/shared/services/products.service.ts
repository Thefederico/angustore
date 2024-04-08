import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

import { Product, Products } from "../model/product.model";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  private http = inject(HttpClient);

  constructor() {}

  getProducts() {
    return this.http.get<Products>("https://api.escuelajs.co/api/v1/products");
  }

  getOneProduct(id: string) {
    return this.http.get<Product>(
      `https://api.escuelajs.co/api/v1/products/${id}`
    );
  }
}