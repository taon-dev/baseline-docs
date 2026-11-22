
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const BaselineDocsAiDocsIsomorphicCodeRegionsMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./isomorphic-code-regions.component').then(m => m.BaselineDocsAiDocsIsomorphicCodeRegionsMdComponent)
  },
];

    