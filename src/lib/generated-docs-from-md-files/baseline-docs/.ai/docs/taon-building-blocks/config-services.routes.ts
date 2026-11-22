
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const BaselineDocsAiDocsTaonBuildingBlocksConfigServicesMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./config-services.component').then(m => m.BaselineDocsAiDocsTaonBuildingBlocksConfigServicesMdComponent)
  },
];

    