
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const BaselineDocsAiDocsSpecialFilesModelsMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./models.component').then(m => m.BaselineDocsAiDocsSpecialFilesModelsMdComponent)
  },
];

    