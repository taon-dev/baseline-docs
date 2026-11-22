
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const BaselineDocsAiDocsTaonBuildingBlocksKvRepositoriesMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./kv-repositories.component').then(m => m.BaselineDocsAiDocsTaonBuildingBlocksKvRepositoriesMdComponent)
  },
];

    