import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { RouterLinkWithHref } from "@angular/router";

import { Product } from "@shared/model/product.model";
import { ReversePipe } from "@shared/pipes/reverse.pipe";

@Component({
  selector: "app-product",
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref, ReversePipe],
  templateUrl: "./product.component.html",
})
export class ProductComponent {
  @Input({ required: true }) product!: Product;

  @Output() addToCart = new EventEmitter();

  onAddToCart() {
    this.addToCart.emit(this.product);
  }
}
