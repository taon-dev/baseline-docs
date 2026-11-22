
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const BaselineDocsAiDocsTaonBuildingBlocksControllersMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./controllers.component').then(m => m.BaselineDocsAiDocsTaonBuildingBlocksControllersMdComponent)
  },
];

    