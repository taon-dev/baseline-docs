
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const BaselineDocsAiDocsArchitectureMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./architecture.component').then(m => m.BaselineDocsAiDocsArchitectureMdComponent)
  },
];

    