import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient} from "@angular/common/http";
import {CHARACTER_API_PROVIDER} from "./ui/providers/character-api.provider";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), CHARACTER_API_PROVIDER]
};
