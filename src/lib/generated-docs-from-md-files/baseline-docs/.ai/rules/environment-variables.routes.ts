
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const BaselineDocsAiRulesEnvironmentVariablesMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./environment-variables.component').then(m => m.BaselineDocsAiRulesEnvironmentVariablesMdComponent)
  },
];

    