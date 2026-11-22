
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const BaselineDocsAiDocsTaonBuildingBlocksEntitiesMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./entities.component').then(m => m.BaselineDocsAiDocsTaonBuildingBlocksEntitiesMdComponent)
  },
];

    