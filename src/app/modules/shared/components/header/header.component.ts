import { Component, inject, signal } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CartService } from "@shared/services/cart.service";
import { RouterLinkActive, RouterLinkWithHref } from "@angular/router";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref, RouterLinkActive],
  templateUrl: "./header.component.html",
})
export class HeaderComponent {
  private cartService = inject(CartService);
  cart = this.cartService.cart;
  total = this.cartService.total;

  hideSideCartMenu = signal<boolean>(false);

  toggleSideCartMenu = () => {
    this.hideSideCartMenu.update((prev) => !prev);
  };
}
