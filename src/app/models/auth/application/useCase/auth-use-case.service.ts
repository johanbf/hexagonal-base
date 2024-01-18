import {Inject, Injectable} from "@angular/core";
import {IAuthApiService} from "../interface/auth-api.interface";
import {Observable} from "rxjs";
import {IDomainResponseAuth} from "../../domain/auth.model";

@Injectable({providedIn: 'root'})
export class AuthUseCaseService {
  constructor(@Inject('IAuthApiService') private _authApiService : IAuthApiService) {}

  logIn(userName: string, password: string) : Observable<IDomainResponseAuth> {
    return this._authApiService.logIn(userName,password)
  }

  loggedIn(value : boolean) {
    return this._authApiService.loggedIn(value)
  }

  loggedIn$() : Observable<boolean>{
    return this._authApiService.loggedIn$()
  }

  getUser() : Observable<IDomainResponseAuth> {
    return this._authApiService.geUser()
  }
}
