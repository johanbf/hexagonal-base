import {Provider} from "@angular/core";
import {CharacterApiService} from "../../models/character/infrastructure/character-api.service";

export const CHARACTER_API_PROVIDER : Provider = {provide: 'ICharacterApiService', useClass: CharacterApiService}
