
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const BaselineDocsAiDocsTransportLayerMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./transport-layer.component').then(m => m.BaselineDocsAiDocsTransportLayerMdComponent)
  },
];

    