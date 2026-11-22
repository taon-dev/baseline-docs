
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const BaselineDocsAiRulesGeneralMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./general.component').then(m => m.BaselineDocsAiRulesGeneralMdComponent)
  },
];

    