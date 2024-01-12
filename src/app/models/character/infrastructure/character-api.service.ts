import {ICharacterApiService} from "../application/interface/character-api.interface";
import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environment/environment";
import {map, Observable} from "rxjs";
import {IApiResponseCharacter} from "./models/character-api.model";
import {IDomainResponseCharacter} from "../domain/character.model";
import {IDomainResponseCharacterAdapter} from "./adapters/IDomainResponseCharacter.adapter";

@Injectable()
export class CharacterApiService implements ICharacterApiService{

  private _httpClient = inject(HttpClient);
  private readonly CHARACTERS = environment.api + '/character';

  getCharacter(): Observable<IDomainResponseCharacter> {
    return this._httpClient.get<IApiResponseCharacter>(this.CHARACTERS).pipe(
      map((response) => {
        return IDomainResponseCharacterAdapter(response)
      })
    )
  }

}
