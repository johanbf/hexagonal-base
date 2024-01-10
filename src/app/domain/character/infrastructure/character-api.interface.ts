import {Observable} from "rxjs";

export interface ICharacterApiService {
  getCharacter() : Observable<any>
}
