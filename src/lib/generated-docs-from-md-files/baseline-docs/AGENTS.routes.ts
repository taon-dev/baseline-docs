
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const BaselineDocsAgentsMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./AGENTS.component').then(m => m.BaselineDocsAgentsMdComponent)
  },
];

    