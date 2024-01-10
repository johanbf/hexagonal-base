import {InjectionToken, Provider} from "@angular/core";
import {ICharacterApiService} from "../character-api.interface";
import {CharacterApiService} from "../character-api.service";

export const HTTP_CHARACTER_SERVICE = new InjectionToken<ICharacterApiService>('CharacterApiService')

export const CHARACTER_API_PROVIDER : Provider = {provide: HTTP_CHARACTER_SERVICE, useClass: CharacterApiService}
