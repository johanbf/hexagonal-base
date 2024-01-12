import {Inject, Injectable} from "@angular/core";
import {ICharacterApiService} from "../interface/character-api.interface";
import {Observable} from "rxjs";
import {IDomainResponseCharacter} from "../../domain/character.model";

@Injectable({providedIn: 'root'})
export class CharacterUseCaseService {
  constructor(private _characterApiService: ICharacterApiService) {}

  getCharacters() : Observable<IDomainResponseCharacter> {
    return this._characterApiService.getCharacter()
  }
}
