import { Routes } from '@angular/router';
import {AuthenticationRouter} from "./router/authentication.router";
import {AUTHENTICATION} from "./shared/constants/routes.constants";
import {HomeComponent} from "./page/home/home.component";
import {ProductRouter} from "./router/product.router";
import {authGuard} from "./guards/auth.guard";

export const routes: Routes = [
  AuthenticationRouter,
  ...ProductRouter,
  {
    path: '',
    redirectTo: AUTHENTICATION.LOGIN,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard]
  }
];
