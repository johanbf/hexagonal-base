import {Inject, Injectable} from "@angular/core";
import {ICharacterApiService} from "../infrastructure/character-api.interface";
import {Observable} from "rxjs";
import {IDomainResponseCharacter} from "../domain/character.model";
import {HTTP_CHARACTER_SERVICE} from "../infrastructure/providers/character-api.provider";

@Injectable({providedIn: 'root'})
export class CharacterUseCaseService {
  constructor(@Inject(HTTP_CHARACTER_SERVICE) private _characterApiService: ICharacterApiService) {}

  getCharacters() : Observable<IDomainResponseCharacter> {
    return this._characterApiService.getCharacter()
  }
}
