import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AUTHENTICATION} from "../shared/constants/routes.constants";

export const blockLoginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const token = JSON.parse(localStorage.getItem('token_access')!);

  if(token){
    router.navigateByUrl('/home')
  }

  return true;
};
