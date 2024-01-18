import {Observable} from "rxjs";
import {IApiResponseAuth} from "../../infrastructure/models/auth-api.model";

export interface IAuthApiService {
  logIn(user: string, password: string) : Observable<IApiResponseAuth>
  loggedIn(value: boolean) : void
  loggedIn$() : Observable<boolean>
  geUser() : Observable<IApiResponseAuth>
}
