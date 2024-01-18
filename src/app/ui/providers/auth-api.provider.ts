import {Provider} from "@angular/core";
import {AuthApiService} from "../../models/auth/infrastructure/auth-api.service";

export const AUTH_API_PROVIDER : Provider = {provide: 'IAuthApiService', useClass: AuthApiService}

