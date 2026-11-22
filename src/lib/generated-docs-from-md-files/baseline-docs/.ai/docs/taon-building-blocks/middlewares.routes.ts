
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const BaselineDocsAiDocsTaonBuildingBlocksMiddlewaresMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./middlewares.component').then(m => m.BaselineDocsAiDocsTaonBuildingBlocksMiddlewaresMdComponent)
  },
];

    