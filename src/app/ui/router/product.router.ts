import {Routes} from "@angular/router";
import {PRODUCT} from "../shared/constants/routes.constants";
import {ProductComponent} from "../page/product/product.component";
import {authGuard} from "../guards/auth.guard";
import {CreateProductComponent} from "../page/product/create-product/create-product.component";

export const ProductRouter : Routes = [
  {
    path: PRODUCT.HOME,
    component: ProductComponent,
    canActivate: [authGuard]
  }
]
