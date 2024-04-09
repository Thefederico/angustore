import { Routes } from "@angular/router";

import { LayoutComponent } from "./modules/shared/components/layout/layout.component";

export const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        loadComponent: () =>
          import("./modules/products/pages/list/list.component").then(
            (m) => m.ListComponent
          ),
      },
      {
        path: "about",
        loadComponent: () =>
          import("./modules/info/pages/about/about.component").then(
            (m) => m.AboutComponent
          ),
      },
      {
        path: "product/:id",
        loadComponent: () =>
          import(
            "./modules/products/pages/product-detail/product-detail.component"
          ).then((m) => m.ProductDetailComponent),
      },
    ],
  },
  {
    path: "**",
    loadComponent: () =>
      import("./modules/info/pages/not-found/not-found.component").then(
        (m) => m.NotFoundComponent
      ),
  },
];
