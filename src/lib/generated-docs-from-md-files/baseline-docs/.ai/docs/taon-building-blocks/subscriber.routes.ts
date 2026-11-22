
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const BaselineDocsAiDocsTaonBuildingBlocksSubscriberMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./subscriber.component').then(m => m.BaselineDocsAiDocsTaonBuildingBlocksSubscriberMdComponent)
  },
];

    