
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const BaselineDocsAiRulesBackendMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./backend.component').then(m => m.BaselineDocsAiRulesBackendMdComponent)
  },
];

    