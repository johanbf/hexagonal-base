import {IApiResponseCharacter} from "../models/character-api.model";
import {IDomainResponseCharacter} from "../../domain/character.model";

export const IDomainResponseCharacterAdapter = (data: IApiResponseCharacter) : IDomainResponseCharacter => {
  return {
    info: data.info,
    results: data.results
  }
}
