
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const BaselineDocsAiRulesTypescriptMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./typescript.component').then(m => m.BaselineDocsAiRulesTypescriptMdComponent)
  },
];

    