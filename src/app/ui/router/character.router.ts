import {Route} from "@angular/router";

export const character: Route = {
  path: 'character',
  loadComponent: () => import('../page/character/character.component'),
}
