
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const BaselineDocsAiDocsTaonBuildingBlocksContextsMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./contexts.component').then(m => m.BaselineDocsAiDocsTaonBuildingBlocksContextsMdComponent)
  },
];

    