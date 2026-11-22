
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const BaselineDocsAiDocsDependencyInjectionMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./dependency-injection.component').then(m => m.BaselineDocsAiDocsDependencyInjectionMdComponent)
  },
];

    