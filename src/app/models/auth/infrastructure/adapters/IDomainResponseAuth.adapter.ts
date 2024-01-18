import {IApiResponseAuth} from "../models/auth-api.model";
import {IDomainResponseAuth} from "../../domain/auth.model";

export const IDomainResponseAuthAdapter = (data: IApiResponseAuth) : IDomainResponseAuth => {
  return {
    id: data.id,
    token: data.token,
    email: data.email,
    gender: data.gender,
    firstName: data.firstName,
    image: data.image,
    lastName: data.lastName,
    username: data.username
  }
}
