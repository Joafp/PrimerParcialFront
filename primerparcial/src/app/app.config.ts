import { ApplicationConfig, NgModule, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { PostapiService } from './service/postapi.service';
import { CommonModule } from '@angular/common';
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};

@NgModule({
  imports: [
    HttpClientModule, // Asegúrate de incluir esto en los imports
    CommonModule,
  ],
  providers: [PostapiService] // Registra tu servicio aquí
})
export class AppConfig { }
