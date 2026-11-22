
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const BaselineDocsAiRulesAngularMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./angular.component').then(m => m.BaselineDocsAiRulesAngularMdComponent)
  },
];

    