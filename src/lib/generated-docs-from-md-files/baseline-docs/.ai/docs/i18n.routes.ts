
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const BaselineDocsAiDocsI18NMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./i18n.component').then(m => m.BaselineDocsAiDocsI18NMdComponent)
  },
];

    