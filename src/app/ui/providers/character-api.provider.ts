import {Provider} from "@angular/core";
import {ICharacterApiService} from "../../models/character/application/interface/character-api.interface";
import {CharacterApiService} from "../../models/character/infrastructure/character-api.service";

export const CHARACTER_API_PROVIDER : Provider = {provide: ICharacterApiService, useClass: CharacterApiService}
