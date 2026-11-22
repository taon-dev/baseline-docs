//#region imports

import { Routes } from '@angular/router';

import { DocsPageComponent } from './docs-page.component';

//#endregion

export const DocsPageRoutes: Routes = [
  //#region routers
  {
    path: '',
    component: DocsPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'baseline-docs/README.md',
      },
      {
        path: '',
        loadChildren: () =>
          import('baseline-docs/src').then(m => m.BaselineDocsDocsRoutes),
      },
    ],
  },

  //#endregion
];
