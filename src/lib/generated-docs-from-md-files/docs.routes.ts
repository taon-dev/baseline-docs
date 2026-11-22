
import  { Routes } from '@angular/router';
export  const BaselineDocsDocsRoutes: Routes = [
// {
//   path: '', // skipping default route for now
//   component: ComponentHere,
// },

   {
      path: 'baseline-docs/.ai/docs/architecture.md',
      loadChildren: () =>
        import('./baseline-docs/.ai/docs/architecture.routes').then(
          m => m.BaselineDocsAiDocsArchitectureMdRoutes,
        ),
    }

  ,

   {
      path: 'baseline-docs/.ai/docs/dependency-injection.md',
      loadChildren: () =>
        import('./baseline-docs/.ai/docs/dependency-injection.routes').then(
          m => m.BaselineDocsAiDocsDependencyInjectionMdRoutes,
        ),
    }

  ,

   {
      path: 'baseline-docs/.ai/docs/framework.md',
      loadChildren: () =>
        import('./baseline-docs/.ai/docs/framework.routes').then(
          m => m.BaselineDocsAiDocsFrameworkMdRoutes,
        ),
    }

  ,

   {
      path: 'baseline-docs/.ai/docs/i18n.md',
      loadChildren: () =>
        import('./baseline-docs/.ai/docs/i18n.routes').then(
          m => m.BaselineDocsAiDocsI18NMdRoutes,
        ),
    }

  ,

   {
      path: 'baseline-docs/.ai/docs/isomorphic-code-regions.md',
      loadChildren: () =>
        import('./baseline-docs/.ai/docs/isomorphic-code-regions.routes').then(
          m => m.BaselineDocsAiDocsIsomorphicCodeRegionsMdRoutes,
        ),
    }

  ,

   {
      path: 'baseline-docs/.ai/docs/realtime.md',
      loadChildren: () =>
        import('./baseline-docs/.ai/docs/realtime.routes').then(
          m => m.BaselineDocsAiDocsRealtimeMdRoutes,
        ),
    }

  ,

   {
      path: 'baseline-docs/.ai/docs/special-files/models.md',
      loadChildren: () =>
        import('./baseline-docs/.ai/docs/special-files/models.routes').then(
          m => m.BaselineDocsAiDocsSpecialFilesModelsMdRoutes,
        ),
    }

  ,

   {
      path: 'baseline-docs/.ai/docs/special-files/utils.md',
      loadChildren: () =>
        import('./baseline-docs/.ai/docs/special-files/utils.routes').then(
          m => m.BaselineDocsAiDocsSpecialFilesUtilsMdRoutes,
        ),
    }

  ,

   {
      path: 'baseline-docs/.ai/docs/special-files/validators.md',
      loadChildren: () =>
        import('./baseline-docs/.ai/docs/special-files/validators.routes').then(
          m => m.BaselineDocsAiDocsSpecialFilesValidatorsMdRoutes,
        ),
    }

  ,

   {
      path: 'baseline-docs/.ai/docs/taon-building-blocks/api-services.md',
      loadChildren: () =>
        import('./baseline-docs/.ai/docs/taon-building-blocks/api-services.routes').then(
          m => m.BaselineDocsAiDocsTaonBuildingBlocksApiServicesMdRoutes,
        ),
    }

  ,

   {
      path: 'baseline-docs/.ai/docs/taon-building-blocks/config-services.md',
      loadChildren: () =>
        import('./baseline-docs/.ai/docs/taon-building-blocks/config-services.routes').then(
          m => m.BaselineDocsAiDocsTaonBuildingBlocksConfigServicesMdRoutes,
        ),
    }

  ,

   {
      path: 'baseline-docs/.ai/docs/taon-building-blocks/contexts.md',
      loadChildren: () =>
        import('./baseline-docs/.ai/docs/taon-building-blocks/contexts.routes').then(
          m => m.BaselineDocsAiDocsTaonBuildingBlocksContextsMdRoutes,
        ),
    }

  ,

   {
      path: 'baseline-docs/.ai/docs/taon-building-blocks/controllers.md',
      loadChildren: () =>
        import('./baseline-docs/.ai/docs/taon-building-blocks/controllers.routes').then(
          m => m.BaselineDocsAiDocsTaonBuildingBlocksControllersMdRoutes,
        ),
    }

  ,

   {
      path: 'baseline-docs/.ai/docs/taon-building-blocks/entities.md',
      loadChildren: () =>
        import('./baseline-docs/.ai/docs/taon-building-blocks/entities.routes').then(
          m => m.BaselineDocsAiDocsTaonBuildingBlocksEntitiesMdRoutes,
        ),
    }

  ,

   {
      path: 'baseline-docs/.ai/docs/taon-building-blocks/kv-repositories.md',
      loadChildren: () =>
        import('./baseline-docs/.ai/docs/taon-building-blocks/kv-repositories.routes').then(
          m => m.BaselineDocsAiDocsTaonBuildingBlocksKvRepositoriesMdRoutes,
        ),
    }

  ,

   {
      path: 'baseline-docs/.ai/docs/taon-building-blocks/middlewares.md',
      loadChildren: () =>
        import('./baseline-docs/.ai/docs/taon-building-blocks/middlewares.routes').then(
          m => m.BaselineDocsAiDocsTaonBuildingBlocksMiddlewaresMdRoutes,
        ),
    }

  ,

   {
      path: 'baseline-docs/.ai/docs/taon-building-blocks/migrations.md',
      loadChildren: () =>
        import('./baseline-docs/.ai/docs/taon-building-blocks/migrations.routes').then(
          m => m.BaselineDocsAiDocsTaonBuildingBlocksMigrationsMdRoutes,
        ),
    }

  ,

   {
      path: 'baseline-docs/.ai/docs/taon-building-blocks/providers.md',
      loadChildren: () =>
        import('./baseline-docs/.ai/docs/taon-building-blocks/providers.routes').then(
          m => m.BaselineDocsAiDocsTaonBuildingBlocksProvidersMdRoutes,
        ),
    }

  ,

   {
      path: 'baseline-docs/.ai/docs/taon-building-blocks/repositories.md',
      loadChildren: () =>
        import('./baseline-docs/.ai/docs/taon-building-blocks/repositories.routes').then(
          m => m.BaselineDocsAiDocsTaonBuildingBlocksRepositoriesMdRoutes,
        ),
    }

  ,

   {
      path: 'baseline-docs/.ai/docs/taon-building-blocks/subscriber.md',
      loadChildren: () =>
        import('./baseline-docs/.ai/docs/taon-building-blocks/subscriber.routes').then(
          m => m.BaselineDocsAiDocsTaonBuildingBlocksSubscriberMdRoutes,
        ),
    }

  ,

   {
      path: 'baseline-docs/.ai/docs/transport-layer.md',
      loadChildren: () =>
        import('./baseline-docs/.ai/docs/transport-layer.routes').then(
          m => m.BaselineDocsAiDocsTransportLayerMdRoutes,
        ),
    }

  ,

   {
      path: 'baseline-docs/.ai/docs/what-to-avoid.md',
      loadChildren: () =>
        import('./baseline-docs/.ai/docs/what-to-avoid.routes').then(
          m => m.BaselineDocsAiDocsWhatToAvoidMdRoutes,
        ),
    }

  ,

   {
      path: 'baseline-docs/.ai/examples/my-entity.worker.README.md',
      loadChildren: () =>
        import('./baseline-docs/.ai/examples/my-entity.worker.README.routes').then(
          m => m.BaselineDocsAiExamplesMyEntityWorkerReadmeMdRoutes,
        ),
    }

  ,

   {
      path: 'baseline-docs/.ai/rules/angular.md',
      loadChildren: () =>
        import('./baseline-docs/.ai/rules/angular.routes').then(
          m => m.BaselineDocsAiRulesAngularMdRoutes,
        ),
    }

  ,

   {
      path: 'baseline-docs/.ai/rules/backend.md',
      loadChildren: () =>
        import('./baseline-docs/.ai/rules/backend.routes').then(
          m => m.BaselineDocsAiRulesBackendMdRoutes,
        ),
    }

  ,

   {
      path: 'baseline-docs/.ai/rules/environment-variables.md',
      loadChildren: () =>
        import('./baseline-docs/.ai/rules/environment-variables.routes').then(
          m => m.BaselineDocsAiRulesEnvironmentVariablesMdRoutes,
        ),
    }

  ,

   {
      path: 'baseline-docs/.ai/rules/file-naming-conventions.md',
      loadChildren: () =>
        import('./baseline-docs/.ai/rules/file-naming-conventions.routes').then(
          m => m.BaselineDocsAiRulesFileNamingConventionsMdRoutes,
        ),
    }

  ,

   {
      path: 'baseline-docs/.ai/rules/general.md',
      loadChildren: () =>
        import('./baseline-docs/.ai/rules/general.routes').then(
          m => m.BaselineDocsAiRulesGeneralMdRoutes,
        ),
    }

  ,

   {
      path: 'baseline-docs/.ai/rules/npm-yarn-packages.md',
      loadChildren: () =>
        import('./baseline-docs/.ai/rules/npm-yarn-packages.routes').then(
          m => m.BaselineDocsAiRulesNpmYarnPackagesMdRoutes,
        ),
    }

  ,

   {
      path: 'baseline-docs/.ai/rules/typescript.md',
      loadChildren: () =>
        import('./baseline-docs/.ai/rules/typescript.routes').then(
          m => m.BaselineDocsAiRulesTypescriptMdRoutes,
        ),
    }

  ,

   {
      path: 'baseline-docs/AGENTS.md',
      loadChildren: () =>
        import('./baseline-docs/AGENTS.routes').then(
          m => m.BaselineDocsAgentsMdRoutes,
        ),
    }

  ,

   {
      path: 'baseline-docs/README.md',
      loadChildren: () =>
        import('./baseline-docs/README.routes').then(
          m => m.BaselineDocsReadmeMdRoutes,
        ),
    }

  ,

   {
      path: 'baseline-docs/api.md',
      loadChildren: () =>
        import('./baseline-docs/api.routes').then(
          m => m.BaselineDocsApiMdRoutes,
        ),
    }

  ,

   {
      path: 'baseline-docs/src/app.auto-gen-docs.md',
      loadChildren: () =>
        import('./baseline-docs/src/app.auto-gen-docs.routes').then(
          m => m.BaselineDocsSrcAppAutoGenDocsMdRoutes,
        ),
    }

  
];

export default BaselineDocsDocsRoutes;
    