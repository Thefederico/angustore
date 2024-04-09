import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Category } from "../model/product.model";

@Injectable({
  providedIn: "root",
})
export class CategoriesService {
  private http = inject(HttpClient);

  constructor() {}

  getCategories() {
    return this.http.get<Category[]>("https://api.escuelajs.co/api/v1/categories");
  }
}
