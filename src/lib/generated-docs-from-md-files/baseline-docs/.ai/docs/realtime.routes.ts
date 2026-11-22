
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const BaselineDocsAiDocsRealtimeMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./realtime.component').then(m => m.BaselineDocsAiDocsRealtimeMdComponent)
  },
];

    