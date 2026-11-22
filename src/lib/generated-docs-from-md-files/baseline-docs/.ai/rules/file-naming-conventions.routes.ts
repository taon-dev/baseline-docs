
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const BaselineDocsAiRulesFileNamingConventionsMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./file-naming-conventions.component').then(m => m.BaselineDocsAiRulesFileNamingConventionsMdComponent)
  },
];

    