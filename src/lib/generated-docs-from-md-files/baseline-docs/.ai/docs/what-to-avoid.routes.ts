
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const BaselineDocsAiDocsWhatToAvoidMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./what-to-avoid.component').then(m => m.BaselineDocsAiDocsWhatToAvoidMdComponent)
  },
];

    