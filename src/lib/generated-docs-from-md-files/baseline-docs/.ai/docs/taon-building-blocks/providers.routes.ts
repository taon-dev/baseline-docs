
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const BaselineDocsAiDocsTaonBuildingBlocksProvidersMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./providers.component').then(m => m.BaselineDocsAiDocsTaonBuildingBlocksProvidersMdComponent)
  },
];

    