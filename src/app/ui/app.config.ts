import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {HttpClientModule, provideHttpClient, withInterceptors} from "@angular/common/http";
import {AUTH_API_PROVIDER} from "./providers/auth-api.provider";
import {provideAnimations} from "@angular/platform-browser/animations";
import {PRODUCT_API_PROVIDER} from "./providers/product-api.providers";
import {tokenAuthInterceptor} from "./shared/interceptors/token-auth.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([tokenAuthInterceptor])),
    importProvidersFrom(HttpClientModule),
    provideAnimations(),
    AUTH_API_PROVIDER,
    PRODUCT_API_PROVIDER
  ]
};
