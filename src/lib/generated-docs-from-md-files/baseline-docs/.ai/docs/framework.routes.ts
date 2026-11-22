
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const BaselineDocsAiDocsFrameworkMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./framework.component').then(m => m.BaselineDocsAiDocsFrameworkMdComponent)
  },
];

    