import { Component } from "@angular/core";


import { HeaderComponent } from "../header/header.component";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-layout",
  standalone: true,
  imports: [RouterModule, HeaderComponent],
  templateUrl: "./layout.component.html",
})
export class LayoutComponent {}
