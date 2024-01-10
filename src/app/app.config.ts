import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {CHARACTER_API_PROVIDER} from "./domain/character/infrastructure/providers/character-api.provider";
import {provideHttpClient} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), CHARACTER_API_PROVIDER]
};
