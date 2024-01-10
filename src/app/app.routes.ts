import { Routes } from '@angular/router';
import {character} from "./ui/router/character.router";

export const routes: Routes = [
  character,
  {
    path: '',
    redirectTo: 'character',
    pathMatch: 'full'
  }
];
