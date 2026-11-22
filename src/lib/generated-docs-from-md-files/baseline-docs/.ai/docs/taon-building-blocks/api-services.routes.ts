
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const BaselineDocsAiDocsTaonBuildingBlocksApiServicesMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./api-services.component').then(m => m.BaselineDocsAiDocsTaonBuildingBlocksApiServicesMdComponent)
  },
];

    