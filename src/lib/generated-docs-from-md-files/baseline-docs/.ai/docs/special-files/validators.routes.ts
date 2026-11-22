
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const BaselineDocsAiDocsSpecialFilesValidatorsMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./validators.component').then(m => m.BaselineDocsAiDocsSpecialFilesValidatorsMdComponent)
  },
];

    