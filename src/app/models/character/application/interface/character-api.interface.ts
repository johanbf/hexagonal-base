import {Observable} from "rxjs";
import {IDomainResponseCharacter} from "../../domain/character.model";

export interface ICharacterApiService {
  getCharacter() : Observable<IDomainResponseCharacter>
}
