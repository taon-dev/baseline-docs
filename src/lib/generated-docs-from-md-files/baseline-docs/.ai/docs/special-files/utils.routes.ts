
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const BaselineDocsAiDocsSpecialFilesUtilsMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./utils.component').then(m => m.BaselineDocsAiDocsSpecialFilesUtilsMdComponent)
  },
];

    