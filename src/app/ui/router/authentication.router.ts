import {Route} from "@angular/router";
import {AUTHENTICATION} from "../shared/constants/routes.constants";
import {LoginComponent} from "../page/auth/login/login.component";
import {blockLoginGuard} from "../guards/block-login.guard";

export const AuthenticationRouter : Route = {
  path: AUTHENTICATION.LOGIN,
  component: LoginComponent,
  canActivate: [blockLoginGuard]
}
