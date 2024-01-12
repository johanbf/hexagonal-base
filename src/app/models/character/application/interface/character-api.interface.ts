import {Observable} from "rxjs";
import {IDomainResponseCharacter} from "../../domain/character.model";

export abstract class ICharacterApiService {
  abstract getCharacter() : Observable<IDomainResponseCharacter>
}
