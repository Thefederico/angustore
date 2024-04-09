import { Component, Input, SimpleChanges, inject, signal } from "@angular/core";


import { Category, Product, Products } from "@shared/model/product.model";
import { ProductComponent } from "@products/components/product/product.component";
import { HeaderComponent } from "@shared/components/header/header.component";
import { CartService } from "@shared/services/cart.service";
import { ProductsService } from "@shared/services/products.service";
import { CategoriesService } from "@app/modules/shared/services/categories.service";
import { RouterLinkWithHref } from "@angular/router";

@Component({
  selector: "app-list",
  standalone: true,
  imports: [
    RouterLinkWithHref,
    ProductComponent,
    HeaderComponent
],
  templateUrl: "./list.component.html",
})
export class ListComponent {
  private cartService = inject(CartService);
  private productsService = inject(ProductsService);
  private categoriesService = inject(CategoriesService);

  @Input() category_id?: string;

  products = signal<Products>([]);
  categories = signal<Category[]>([]);

  ngOnInit() {
    this.getCategories();
  }

  ngOnChanges() {
    this.getProducts();
  }

  onAddToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  private getProducts() {
    this.productsService.getProducts(this.category_id).subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  private getCategories() {
    this.categoriesService.getCategories().subscribe({
      next: (categories) => {
        this.categories.set(categories);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
