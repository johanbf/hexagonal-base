import {IAuthApiService} from "../application/interface/auth-api.interface";
import {BehaviorSubject, map, Observable, Subject} from "rxjs";
import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environment/environment";
import {IApiResponseAuth} from "./models/auth-api.model";
import {IDomainResponseAuthAdapter} from "./adapters/IDomainResponseAuth.adapter";

@Injectable()
export class AuthApiService implements IAuthApiService{

  private sigIn! : boolean
  private sigIn$ = new BehaviorSubject<boolean>(false)

  private _httpClient = inject(HttpClient);

  logIn(user: string, password: string): Observable<IApiResponseAuth> {
    return this._httpClient.post<IApiResponseAuth>(environment.api+'/auth/login', {
      username: user,
      password: password
    }).pipe(
      map((response) => {
        return IDomainResponseAuthAdapter(response)
      })
    )
  }

  loggedIn(value: boolean) {
    this.sigIn = value
    this.sigIn$.next(this.sigIn)
  }

  loggedIn$() : Observable<boolean>{
    return this.sigIn$.asObservable()
  }

  geUser() : Observable<IApiResponseAuth> {
    return this._httpClient.get<IApiResponseAuth>(environment.api+'/auth/me').pipe(
      map((response) => {
        return IDomainResponseAuthAdapter(response)
      })
    )
  }

}
