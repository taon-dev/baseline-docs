
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const BaselineDocsAiDocsTaonBuildingBlocksRepositoriesMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./repositories.component').then(m => m.BaselineDocsAiDocsTaonBuildingBlocksRepositoriesMdComponent)
  },
];

    