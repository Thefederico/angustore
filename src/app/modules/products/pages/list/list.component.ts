import { Component, inject, signal } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Product } from "@shared/model/product.model";
import { ProductComponent } from "@products/components/product/product.component";
import { HeaderComponent } from "@shared/components/header/header.component";
import { CartService } from "@shared/services/cart.service";
import { ProductsService } from "@shared/services/products.service";

@Component({
  selector: "app-list",
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: "./list.component.html",
})
export class ListComponent {
  private cartService = inject(CartService);
  private productsService = inject(ProductsService);

  products = signal<Product[]>([]);

  ngOnInit() {
    this.productsService.getProducts().subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  onAddToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
