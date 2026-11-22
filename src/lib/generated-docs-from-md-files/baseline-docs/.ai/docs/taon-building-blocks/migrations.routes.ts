
//#region imports
import { Routes } from '@angular/router';
//#endregion

export const BaselineDocsAiDocsTaonBuildingBlocksMigrationsMdRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./migrations.component').then(m => m.BaselineDocsAiDocsTaonBuildingBlocksMigrationsMdComponent)
  },
];

    