import { CommonModule } from "@angular/common";
import { Component, Input, inject, signal } from "@angular/core";

import { Product } from "@shared/model/product.model";
import { CartService } from "@shared/services/cart.service";
import { ProductsService } from "@shared/services/products.service";

@Component({
  selector: "app-product-detail",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./product-detail.component.html",
})
export class ProductDetailComponent {
  private productService = inject(ProductsService);
  private cartService = inject(CartService);

  @Input() id?: string;

  product = signal<Product | null>(null);
  cover = signal<string>("");

  ngOnInit() {
    if (this.id) {
      this.productService.getOneProduct(this.id).subscribe((product) => {
        this.product.set(product);
        if (product?.images?.length > 0) {
          this.cover.set(product.images[0]);
        }
      });
    }
  }

  changeCover(image: string) {
    this.cover.set(image);
  }

  addToCart() {
    const product = this.product();
    if (product) {
      this.cartService.addToCart(product);
    }
  }
}
