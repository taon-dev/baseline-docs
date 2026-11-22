// @taonSkipCut
// THIS FILE IS GENERATED - DO NOT MODIFY
export const BaselineDocsDocsIndexData = [
  {
    "filePath": "baseline-docs/.ai/docs/architecture.md",
    "headingId": "taon-architecture",
    "headingTitle": "Taon architecture",
    "text": "Taon architecture Taon is a TypeScript framework and CLI for building applications and reusable libraries. A standalone Taon project keeps its source in one src/ tree. The CLI uses that source to build the library or application artifacts configured for the project. Taon workspaces can contain several projects. Each project has a root taon.jsonc that identifies its type and defines its project-specific configuration.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/architecture.md",
    "headingId": "identify-a-taon-project",
    "headingTitle": "Identify a Taon project",
    "text": "Identify a Taon project Open taon.jsonc in the directory you are inspecting. Its type field tells you how to navigate the project. type Project kind Where to look next isomorphic-lib Standalone project Open src/ for the application and library source. container Container project Look for child directories with their own taon.jsonc. The snippets below show only the field that identifies the project type. An existing taon.jsonc can contain additional settings.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/architecture.md",
    "headingId": "standalone-projects",
    "headingTitle": "Standalone projects",
    "text": "Standalone projects A standalone project declares isomorphic-lib in its root taon.jsonc. { \"type\": \"isomorphic-lib\" } A standalone project owns its src/ tree. It can expose reusable code through its library entry point and use the same code in its application entry points. For example, a project can export a context and its building blocks for other Taon projects to use, while also providing an application that runs them. A standalone project can live on its own or inside a Taon container. It may have its own Git repository. The type field describes the Taon project structure. Check the Git root separately when working across projects. my-feature/ taon.jsonc src/ lib/ index.ts app.ts",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/architecture.md",
    "headingId": "container-projects",
    "headingTitle": "Container projects",
    "text": "Container projects A container declares container in its root taon.jsonc. { \"type\": \"container\" } A container groups standalone projects and can also contain nested containers. Each child project has its own root configuration. A workspace can therefore contain reusable libraries, consuming applications, and groups of related projects at different levels. workspace/ taon.jsonc shared-feature/ taon.jsonc src/ applications/ taon.jsonc website/ taon.jsonc src/ In this layout, workspace/ and applications/ are containers. shared-feature/ and website/ are standalone projects. If website/ consumes a feature exported by shared-feature/, follow the import to find the implementation. Reusable behavior belongs in the project that provides it. Website-specific configuration and integration belong in website/.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/architecture.md",
    "headingId": "navigate-a-workspace",
    "headingTitle": "Navigate a workspace",
    "text": "Navigate a workspace Start with the taon.jsonc in the directory you are inspecting. In a container, look for child directories with their own taon.jsonc. Apply the same check when you encounter a nested container. In a standalone project, open src/ and identify the entry point or module relevant to your task. If the task spans projects, trace imports from the consuming application to the standalone project that exports the feature.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/architecture.md",
    "headingId": "standalone-project-entry-points",
    "headingTitle": "Standalone project entry points",
    "text": "Standalone project entry points The files below are common entry points. Check the project's taon.jsonc and src/ tree to see which artifacts it supports. Path Purpose src/lib/index.ts Exports the project's reusable library code. src/app.ts Application entry point for the Angular frontend and Node.js backend. src/app.electron.ts Entry point for an Electron application. src/app.vscode.ts Entry point for a VS Code extension. src/cli.ts Entry point when the project produces a CLI tool. src/global.scss Global application styles.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/architecture.md",
    "headingId": "how-an-application-is-assembled",
    "headingTitle": "How an application is assembled",
    "text": "How an application is assembled A project owns source code and build configuration. A context assembles runtime building blocks such as controllers, entities, repositories, and providers. A reusable project can export a context through its library entry point so a consuming application can compose it with its own contexts. See Contexts and Dependency injection for registration, inheritance, and injection patterns.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/architecture.md",
    "headingId": "isomorphic-source-and-runtime-targets",
    "headingTitle": "Isomorphic source and runtime targets",
    "text": "Isomorphic source and runtime targets Taon can build browser and backend versions of the same TypeScript source. Code regions determine which parts of a file are included in each output. Check the target before choosing a dependency, accessing a secret, or using a runtime-specific API. Target Where backend logic runs What to account for Node.js In a Node.js process. Keep server credentials and server-only integrations in the backend. WebSQL In the browser, with a browser-local database. Browser code and storage are accessible to the user. Public webhooks require a separately reachable backend. Cloudflare Worker In a Cloudflare Worker. Use Worker-compatible dependencies, bindings, and storage adapters. Check compatibility before using Node.js APIs. Electron In the Electron backend, with an Angular UI that communicates over IPC. Keep backend and renderer code in the appropriate build regions. A project's supported targets depend on its configuration and dependencies. See Isomorphic code regions for how to write code that builds for the intended runtime.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/architecture.md",
    "headingId": "build-and-run-a-standalone-project",
    "headingTitle": "Build and run a standalone project",
    "text": "Build and run a standalone project The Taon framework README lists Node.js 22 or later as a prerequisite. From the standalone project root, start the library watch build in one terminal. taon build:lib taon build:watch:lib Start the Node.js application in a second terminal (ng server). Taon watch build lib mode is needed when we want to see ng serve changes. taon app:normal For projects that support other runtime targets, the CLI also provides the following development commands. Command Target taon app:websql Browser-local WebSQL backend taon app:cloudflare Cloudflare Worker taon app:electron Electron taon app:normal Normal NodeJS See the CLI command guide.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/architecture.md",
    "headingId": "further-reading",
    "headingTitle": "Further reading",
    "text": "Further reading Controllers Entities Migrations",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/dependency-injection.md",
    "headingId": "dependency-injection-naming-conventions",
    "headingTitle": "Dependency Injection Naming Conventions",
    "text": "Dependency Injection Naming Conventions",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/dependency-injection.md",
    "headingId": "angular-services",
    "headingTitle": "Angular services",
    "text": "Angular services Use the full class-based name for injected application services. class MyExampleComponent { // GOOD - name based on the injected class myApiService = inject(MyApiService); // BAD api = inject(MyApiService); }",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/dependency-injection.md",
    "headingId": "short-names-for-common-angular-dependencies",
    "headingTitle": "Short names for common Angular dependencies",
    "text": "Short names for common Angular dependencies Short, conventional names are allowed for well-known Angular framework dependencies when their meaning is obvious. Examples: class MyExampleComponent { cdr = inject(ChangeDetectorRef); route = inject(ActivatedRoute); router = inject(Router); injector = inject(Injector); destroyRef = inject(DestroyRef); location = inject(Location); } Do not unnecessarily expand conventional Angular names: // NOT REQUIRED changeDetectorRef = inject(ChangeDetectorRef); activatedRoute = inject(ActivatedRoute); For application-specific services, always prefer the full class-based name.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/dependency-injection.md",
    "headingId": "taon-angular-services",
    "headingTitle": "Taon Angular services",
    "text": "Taon Angular services Use the full class-based name of controllers injected into API services. class MyExampleApiService extends TaonBaseAngularService { userController = this.inject(UserController); } Use the full class-based name of providers injected into config services. class MyExampleConfigService extends TaonBaseAngularService { myUserProvider = this.inject(MyUserProvider); } Avoid shortened or generic names such as: // BAD controller = this.inject(UserController); userCtrl = this.inject(UserController); provider = this.inject(MyUserProvider); userProv = this.inject(MyUserProvider);",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/dependency-injection.md",
    "headingId": "taon-framework-di",
    "headingTitle": "Taon framework DI",
    "text": "Taon framework DI For Taon repositories, providers, controllers, and other injectable building blocks, use the full class-based name. class MyExampleController { myUserRepository = this.inject(MyUserRepository); myBookProvider = this.inject(MyBookProvider); } Avoid shortened or generic names: // BAD repo = this.inject(MyUserRepository); userRepo = this.inject(MyUserRepository); provider = this.inject(MyBookProvider); bookProv = this.inject(MyBookProvider);",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/dependency-injection.md",
    "headingId": "general-rule",
    "headingTitle": "General rule",
    "text": "General rule The injected property name should normally be the camelCase version of the injected class name: MyApiService -> myApiService UserController -> userController MyUserProvider -> myUserProvider MyUserRepository -> myUserRepository The exception is common Angular framework dependencies with established, unambiguous short names such as cdr, route, and router.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/framework.md",
    "headingId": "taon-framework-building-blocks",
    "headingTitle": "Taon framework building blocks",
    "text": "Taon framework building blocks A Taon application is assembled from building blocks registered in a context. Controllers expose APIs, repositories handle backend data access, and Angular services connect the UI to those APIs and to context configuration. Start with Architecture if you need to locate the right project or understand its runtime targets. Start with Contexts if you are adding a feature to an existing project.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/framework.md",
    "headingId": "find-the-right-building-block",
    "headingTitle": "Find the right building block",
    "text": "Find the right building block If you need to… Read Register building blocks, compose reusable contexts, or initialize an application context Contexts Expose a REST endpoint, add entity CRUD, or return a structured API error Controllers Call a Taon controller from an Angular application API services Map a TypeScript class to a database table Entities Query entities or encapsulate custom backend operations Repositories Store and retrieve typed values by key KV repositories Define context-scoped configuration or resolve environment values Providers Expose context configuration to Angular components Configuration services Intercept requests across a context, a controller, or an individual endpoint Middleware and interceptors React to entity lifecycle events Subscribers Evolve a database schema or understand how database modes affect existing data Migrations",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/framework.md",
    "headingId": "how-the-pieces-fit-together",
    "headingTitle": "How the pieces fit together",
    "text": "How the pieces fit together For a feature such as listing users, an Angular component calls an API service. The service calls a Taon controller endpoint. The controller uses a repository to query the User entity and returns the result. The context registers the backend building blocks that the feature uses. Configuration follows its own path. A provider holds context-scoped configuration, and an Angular configuration service exposes the values the UI needs. Middleware can intercept the API request, while subscribers react to entity events and migrations evolve the database over time.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/framework.md",
    "headingId": "related-guides",
    "headingTitle": "Related guides",
    "text": "Related guides Dependency injection explains how to resolve classes from the appropriate context. Isomorphic code regions explains which code is included in browser and backend builds.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/i18n.md",
    "headingId": "internationalization-i18n",
    "headingTitle": "Internationalization (i18n)",
    "text": "Internationalization (i18n) All user-visible text that may need localization should use the Taon translation system.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/i18n.md",
    "headingId": "frontend",
    "headingTitle": "Frontend",
    "text": "Frontend Use the Taon translation system in Angular components, services, directives, and other frontend code.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/i18n.md",
    "headingId": "component-setup",
    "headingTitle": "Component setup",
    "text": "Component setup Create the translation helper once at file level: import { Taon } from 'taon/src'; import { Translation } from '@taon-dev/i18n/src'; const t = Translation.for( Taon.__FILE_RELATIVE_PATH, Taon.LANG_IMPORT_MAP, ); @Component({ selector: 'my-component', // ... }) export class MyComponent { //#region injections t = t.for(this); //#endregion signalLabel = this.t.signal.gettext('Label signal'); signalWithParams = this.t.signal.gettext('Params: [[ test ]]', { test: 'test param', }); normalLabel = this.t.gettext('Normal label'); normalLabelWithContext = this.t.gettext( 'Normal label', {}, 'context of translation', ); refresh = new BehaviorSubject({}); valueInsideComponent = 'dynamic!'; observableLabel$ = this.refresh.asObservable().pipe( switchMap(() => this.t.$.gettext('I am [[ dynamicParam ]]', { dynamicParam: this.valueInsideComponent, }), ), ); }",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/i18n.md",
    "headingId": "choosing-the-translation-api",
    "headingTitle": "Choosing the translation API",
    "text": "Choosing the translation API Choose the simplest API appropriate for the value. 1. Signal translation Prefer Signal-based translations for values that should reactively update when the active language changes: signalLabel = this.t.signal.gettext('Label signal'); Parameters are supported: signalWithParams = this.t.signal.gettext('Params: [[ test ]]', { test: 'test param', }); Use [[ paramName ]] placeholders for dynamic translation parameters. 2. Normal synchronous translation Use gettext() when a reactive value is not needed: normalLabel = this.t.gettext('Normal label'); Use the optional context argument when identical source text may require different translations depending on its meaning: normalLabelWithContext = this.t.gettext( 'Normal label', {}, 'context of translation', ); 3. Observable translation Use the Observable API only when the translated value naturally belongs to an existing RxJS flow: observableLabel$ = this.refresh.asObservable().pipe( switchMap(() => this.t.$.gettext('I am [[ dynamicParam ]]', { dynamicParam: this.valueInsideComponent, }), ), ); Do NOT introduce an Observable solely for translation when a normal or Signal-based translation is sufficient.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/i18n.md",
    "headingId": "template-usage",
    "headingTitle": "Template usage",
    "text": "Template usage Translations may be consumed directly in Angular templates: <span>{{ signalLabel() }}</span> <span>{{ signalWithParams() }}</span> <span>{{ normalLabel }}</span> <span>{{ normalLabelWithContext }}</span> <span>{{ observableLabel$ | async }}</span> <span>{{ t.gettext('This also works!') }}</span> <!-- only when TranslateDirective included in imports --> <span translate>This will also be translated!</span>",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/i18n.md",
    "headingId": "frontend-rules",
    "headingTitle": "Frontend rules",
    "text": "Frontend rules Translate user-visible text when appropriate. Do NOT hardcode text in TypeScript when that text should be localized. Prefer Signals for reactive translations. Use normal gettext() for simple synchronous translations. Use t.$.gettext() only when working naturally inside an RxJS flow. Do NOT create RxJS streams just to translate a value. Use translation context when the same source text can have different meanings. Use [[ param ]] placeholders instead of manually concatenating dynamic values into translation strings. if you use TranslateDirective => you still needs to assign \"t\" variable to Component body t = t.for(this);",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/i18n.md",
    "headingId": "backend",
    "headingTitle": "Backend",
    "text": "Backend Backend translation works differently from frontend translation. Taon provides a request-specific translation instance through the third argument of the controller handler. The language is associated with the current request and may be detected from request information such as cookies.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/i18n.md",
    "headingId": "important-do-not-create-the-frontend-translation-helper",
    "headingTitle": "Important: do NOT create the frontend translation helper",
    "text": "Important: do NOT create the frontend translation helper Do NOT do this in a Taon backend controller: // 🚫 DO NOT USE THIS FOR CONTROLLER REQUEST TRANSLATION const t = Translation.for( Taon.__FILE_RELATIVE_PATH, Taon.LANG_IMPORT_MAP, ); This pattern is intended for Angular/frontend classes such as components, services, and directives. For controller request translation, always use the t supplied to the request handler: return async (req, res, { t }) => { // use t here };",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/i18n.md",
    "headingId": "backend-translations-are-synchronous",
    "headingTitle": "Backend translations are synchronous",
    "text": "Backend translations are synchronous Inside the request handler, use the synchronous translation API. Do NOT use: t.signal t.$ translation Signals translation Observables Use: t.gettext(...) or, when translating arbitrary/dynamic text: t.translate(...)",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/i18n.md",
    "headingId": "translate-using-the-request-language",
    "headingTitle": "Translate using the request language",
    "text": "Translate using the request language @TaonController({ className: 'ExampleController', }) export class ExampleController extends TaonBaseController { @GET() helloWorld( @Query('yourName') yourName: string, ): Taon.Response<string> { //#region @websqlFunc return async (req, res, { t }) => { return `${t.gettext('Hello')} : ${yourName}`; }; //#endregion } } Here, t uses the language detected for the current request.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/i18n.md",
    "headingId": "force-a-specific-language",
    "headingTitle": "Force a specific language",
    "text": "Force a specific language When a response must use a specific language regardless of the request language, explicitly change it: @GET() helloWorldInFrench( @Query('yourName') yourName: string, ): Taon.Response<string> { //#region @websqlFunc return async (req, res, { t }) => { await t.changeFileLang('fr-FR'); return `${t.gettext('Hello')} : ${yourName}`; }; //#endregion } Do not force a language unless the feature specifically requires it.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/i18n.md",
    "headingId": "translate-arbitrary-text",
    "headingTitle": "Translate arbitrary text",
    "text": "Translate arbitrary text For arbitrary text that is not a predefined gettext() translation entry, use translate(): @POST() translateSomethingUnknown( @Body('bigText') bigText: string, ): Taon.Response<string> { //#region @websqlFunc return async (req, res, { t }) => { t.changeFileLang('es-ES'); return t.translate(bigText); }; //#endregion }",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/i18n.md",
    "headingId": "backend-rules",
    "headingTitle": "Backend rules",
    "text": "Backend rules Always obtain t from the third controller-handler argument: { t }. Treat t as request-specific. Use t.gettext() for known application strings. Use t.translate() for arbitrary/dynamic text. Use t.changeFileLang(...) only when the endpoint explicitly needs to override the detected request language. Do NOT create a frontend-style Translation.for(...) instance for controller request translation. Do NOT use Signals or Observables for backend translation. Do NOT introduce frontend translation patterns into backend controller handlers.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/i18n.md",
    "headingId": "cli",
    "headingTitle": "CLI",
    "text": "CLI Extracting translation from .ts, html to .po files taon lang:extract",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/isomorphic-code-regions.md",
    "headingId": "isomorphic-code-regions",
    "headingTitle": "Isomorphic code regions",
    "text": "Isomorphic code regions Taon builds shared TypeScript source for different runtimes. The CLI processes the region markers below when it creates browser, WebSQL, CommonJS, or ESM output. Put explanatory prose outside code examples; keep the exact region markers in code because they are part of the build input.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/isomorphic-code-regions.md",
    "headingId": "backend-code",
    "headingTitle": "Backend code",
    "text": "Backend code Use @backend for a block that belongs to a backend build and can be omitted from ordinary browser output. Use @backendFunc when a function body is backend-only and the browser build must retain a function that returns undefined. function getNodeVersion(): string | undefined { //#region @backendFunc return process.version; //#endregion } @websql and @websqlFunc are for code that belongs to Node.js and WebSQL backend builds. WebSQL mode runs backend logic in the browser; it is not the same as an ordinary browser build. function getBackendValue(): string | undefined { //#region @websqlFunc return 'backend-value'; //#endregion } Use a shared fallback after a @backend region when the browser needs a different implementation: function getRuntimeName(): string { //#region @backend return process.release.name; //#endregion return 'browser'; }",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/isomorphic-code-regions.md",
    "headingId": "browser-only-and-websql-only-code",
    "headingTitle": "Browser-only and WebSQL-only code",
    "text": "Browser-only and WebSQL-only code Use @browser for code that should be emitted for the browser and omitted from backend output. Imports can also use an inline marker at the end of the import statement: import { TaonAdminService } from 'taon/src'; // @browser Use @websqlOnly for code that is specific to WebSQL browser mode and should not be emitted for Node.js: //#region @websqlOnly const websqlOnlyValue = 'browser backend'; //#endregion",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/isomorphic-code-regions.md",
    "headingId": "commonjs-and-esm-differences",
    "headingTitle": "CommonJS and ESM differences",
    "text": "CommonJS and ESM differences @esmRemove marks code to remove from the ESM backend output, such as a Node.js API that is unavailable in a Cloudflare Worker. @cjsRemove marks code to remove from the CommonJS backend output. function loadValue(): string { if (isCloudflareWorker()) { //#region @esmRemove return readFromNodeFilesystem(); //#endregion return readFromWorkerBinding(); } return readFromNodeFilesystem(); } Cloudflare Workers use an ESM runtime and do not provide the full Node.js runtime. Keep Worker bindings and APIs in the ESM-compatible path and test the actual Worker artifact; a successful Node.js build does not verify Worker compatibility.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/isomorphic-code-regions.md",
    "headingId": "file-suffixes-and-imports",
    "headingTitle": "File suffixes and imports",
    "text": "File suffixes and imports Use .browser.ts for files intended only for browser-side code and .backend.ts for Node.js-only code when the project's build recognizes those suffixes. Angular component files are browser UI. Do not infer runtime support from a generic .service.ts or .routes.ts name; inspect the target project's build rules and examples. Inline import annotations such as // @browser are build markers and must remain at the end of the import statement. Do not place the marker above or below the import. Avoid unmarked Node.js built-ins in shared files; use a region or a runtime-neutral Taon API. For available targets and transport differences, see Architecture and Transport layer.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/realtime.md",
    "headingId": "realtime-communications",
    "headingTitle": "Realtime communications",
    "text": "Realtime communications Depending on where you use you backend/frontend - taon framework uses different mechanism for realtime communication: normal NodeJs backend => TCP(upgrade) socket communication based on socket.io (UDP in future) electron backend => IPC for realtime communication websql browser backend => mock of realtime communication based on RxJS library cloudfalre (realtime not supported) You can listen/subscribe to custom events or entities events in every simple fashion. @TaonSubscriber({ className: 'RealtimeClassSubscriber', }) export class RealtimeClassSubscriber extends TaonBaseSubscriberForEntity { listenTo() { return UserEntity; } afterInsert(entity: any) { console.log(`AFTER INSERT: `, entity); MainContext.realtime.server.triggerEntityTableChanges(UserEntity); } } // listen change on backend async function start() { MainContext.realtime.server .listenChangesCustomEvent(saveNewUserEventKey) .subscribe(async () => { console.log('save new user event'); await realtimeUserController.saveNewUser(); }); } // listen changes on frontend export class RealtimeClassSubscriberComponent { ngOnInit(): void { console.log('realtime client subscribers start listening!'); MainContext.realtime.client .listenChangesEntityTable(UserEntity) .pipe(untilDestroyed(this), debounceTime(1000)) .subscribe(message => { console.log('realtime message from class subscriber ', message); }); } }",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/special-files/models.md",
    "headingId": "models",
    "headingTitle": "Models",
    "text": "Models create FOLDER_NAME.models.ts for validatros insert in this file backend/frontend models (classes, interfaces, types, enums) use namespace (taon in production flatten namespaces for tree shaking)",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/special-files/utils.md",
    "headingId": "utils",
    "headingTitle": "Utils",
    "text": "Utils create FOLDER_NAME.utils.ts for any kind of helpers things from utils file should be resued between backend and frontned use namespace (taon in production flatten namespaces for tree shaking)",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/special-files/validators.md",
    "headingId": "validator",
    "headingTitle": "Validator",
    "text": "Validator create FOLDER_NAME.validators.ts for validatros insert in this file backend/frontend validators use namespace (taon in production flatten namespaces for tree shaking)",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/api-services.md",
    "headingId": "taon-api-service",
    "headingTitle": "Taon API service",
    "text": "Taon API service An API service injects Taon controllers and provides an application-scoped place to adapt requests and responses or maintain state. Avoid providedIn: 'root' when the service must be scoped to an injected Taon context. @Injectable() export class UserApiService extends TaonBaseAngularService { protected userController = this.inject(UserController); getCrudController() { return this.userController; } getAll() { return this.userController.getAll() .request() .observable .pipe(map(response => response.body.json)); } async getTime() { const response = await this.userController.whatTimeIsIt().request(); return response.body.text; } } request().observable exposes the observable request path; awaiting request() uses the promise path. The response body provides parsed text or JSON and other response representations according to the controller's response type.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/config-services.md",
    "headingId": "taon-config-service",
    "headingTitle": "Taon Config Service",
    "text": "Taon Config Service A Taon Config Service acts as a bridge between Taon providers and Angular components, exposing context-specific configuration and frontend-friendly properties. Use a Config Service to: Inject Taon providers associated with a specific Taon context. Access frontend-specific configuration exposed by Taon providers. Expose convenient properties and methods for Angular components without requiring them to interact directly with providers. Keep configuration context-scoped, rather than sharing a single service instance across the entire Angular application.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/config-services.md",
    "headingId": "example",
    "headingTitle": "Example",
    "text": "Example @Injectable({}) export class UserConfigService extends TaonBaseAngularService { userProvider = this.inject(UserProvider); get isLoginAvailable(): boolean { return this.userProvider.login.enabled; } }",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/config-services.md",
    "headingId": "important-notes",
    "headingTitle": "Important Notes",
    "text": "Important Notes",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/config-services.md",
    "headingId": "context-scoped-dependency-injection",
    "headingTitle": "Context-scoped dependency injection",
    "text": "Context-scoped dependency injection Do not use providedIn: 'root' when declaring a Taon Config Service. Unlike regular Angular services registered globally, Taon Config Services must be scoped to their corresponding Taon context. This ensures that different contexts can maintain independent configurations without sharing a single service instance across the entire application.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/config-services.md",
    "headingId": "provider-injection",
    "headingTitle": "Provider injection",
    "text": "Provider injection Taon Config Services use this.inject() to access Taon providers. Currently, only Taon controllers can be injected into Config Services. Controllers act as the bridge between backend and frontend functionality.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/config-services.md",
    "headingId": "recommended-usage",
    "headingTitle": "Recommended usage",
    "text": "Recommended usage Prefer exposing simple getters and methods from your Config Service instead of accessing provider configuration directly throughout Angular components. This keeps components clean, centralizes context-specific configuration, and separates Taon framework logic from UI implementation.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/contexts.md",
    "headingId": "taon-contexts",
    "headingTitle": "Taon contexts",
    "text": "Taon contexts A context is Taon's registration and runtime boundary for framework building blocks such as controllers, entities, repositories, providers, migrations, and subcontexts. Register a class in the context that owns its behavior rather than constructing it directly.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/contexts.md",
    "headingId": "abstract-and-active-contexts",
    "headingTitle": "Abstract and active contexts",
    "text": "Abstract and active contexts An abstract context is reusable library configuration. An active context combines reusable contexts with application-specific host configuration and runtime settings. The CLI generates host configuration for deployable app contexts; keep application-specific configuration in the application's context. import { Taon, TaonBaseContext } from 'taon/src'; export const MainAbstractContext = Taon.createContext(() => ({ contextName: 'MainAbstractContext', abstract: true, contexts: { TaonBaseContext, }, })); An active app context can include the abstract context and use its registered building blocks: export const AppContext = Taon.createContext(() => ({ ...HOST_CONFIG['AppContext'], contexts: { MainAbstractContext, }, })); Use TaonBaseContext where the application needs Taon's standard base context. Add controllers, entities, repositories, providers, subscribers, migrations, and database settings to the context configuration that owns them. Keep class names and context names unique where Taon uses them for registration or generated API paths.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/contexts.md",
    "headingId": "initialization",
    "headingTitle": "Initialization",
    "text": "Initialization Initialize each active context before using its APIs or resolving its registered services. Abstract contexts are included by active contexts rather than initialized as application entry points. Database and migration behavior depends on the active context's configuration; see Migrations.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/contexts.md",
    "headingId": "related-building-blocks",
    "headingTitle": "Related building blocks",
    "text": "Related building blocks Controllers Repositories Providers Entities Configuration services",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/controllers.md",
    "headingId": "taon-controllers",
    "headingTitle": "Taon controllers",
    "text": "Taon controllers Taon controllers define backend endpoints that frontend code can call through an Angular API service. Inject controllers only in *.api.service.ts files. Angular components call the API service. Add a custom endpoint Use @TaonController to define a controller and @GET() to expose a method as a GET endpoint. The example below returns a plain string. Keep the @websqlFunc region markers in the example because Taon uses them as build directives. @TaonController({ className: 'UserController' }) export class UserController extends TaonBaseController { @GET() helloWorld(): Taon.Response<string> { //#region @websqlFunc return async () => 'Hello, world!'; //#endregion } } Generate CRUD endpoints for an entity Extend TaonBaseCrudController<User> and set entityClassResolveFn to return the User entity class. The base controller provides standard CRUD methods such as getAll() and update(). You can add custom endpoints alongside those methods. @TaonController({ className: 'UserController' }) export class UserController extends TaonBaseCrudController<User> { entityClassResolveFn = () => User; @GET() whatTimeIsIt(): Taon.Response<string> { //#region @websqlFunc return async () => new Date().toString(); //#endregion } }",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/controllers.md",
    "headingId": "error-handling-in-controllers",
    "headingTitle": "Error handling in controllers",
    "text": "Error handling in controllers Prefer Taon.error() when an endpoint needs to return a structured error. It throws immediately, so execution stops at the call. Supply message and status, and include code when clients need a stable identifier for the error. Approach Behavior Taon.error() Recommended for structured errors with an HTTP status and an optional application error code. throw '…' Throws a plain string message. throw new Error('…') Throws an Error object with a message and stack trace. res.status(...).json(...) Writes an Express response directly. Prefer Taon.error() for Taon endpoints. Return immediately after sending the response to stop the handler. The example selects an error-handling approach using the errorType query parameter. When the parameter is omitted, the endpoint returns a greeting. @TaonController({ className: 'SampleController' }) export class SampleController extends TaonBaseController { @GET() helloWorld( @Query('errorType') errorType?: 'short' | 'stack' | 'customCode' | 'taonError', ): Taon.Response<string> { //#region @websqlFunc return async (_req, res) => { if (errorType === 'taonError') { Taon.error({ message: 'This is a custom Taon error.', code: 'CUSTOM_ERR', status: 499, }); } if (errorType === 'short') { throw 'A short error message.'; } if (errorType === 'stack') { throw new Error('An error with a stack trace.'); } if (errorType === 'customCode') { res.status(444).json({ customErrorMessage: 'A custom error response.', }); return; } return 'Hello, world!'; }; //#endregion } }",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/entities.md",
    "headingId": "taon-entities",
    "headingTitle": "Taon entities",
    "text": "Taon entities A Taon entity is a TypeScript class that maps to a database table. Taon builds on TypeORM entities. You can also use an entity class as a data transfer object (DTO) when its fields match the API contract. Define a separate DTO when an endpoint accepts or exposes only part of the entity.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/entities.md",
    "headingId": "define-an-entity",
    "headingTitle": "Define an entity",
    "text": "Define an entity Decorate the class with @TaonEntity and set className to the class name. Use Taon column decorators to define persisted fields. In this example, @StringColumn() maps location to a database column. The @websql region markers are Taon build directives. Keep them around the column decorator as shown. @TaonEntity({ className: 'Project' }) export class Project extends TaonBaseEntity { //#region @websql @StringColumn() //#endregion location?: string; } The ? makes location optional in TypeScript. Configure database nullability and defaults through the column definition.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/entities.md",
    "headingId": "use-the-base-entity-with-id-and-version-fields",
    "headingTitle": "Use the base entity with ID and version fields",
    "text": "Use the base entity with ID and version fields Extend TaonBaseAbstractEntity when you want Taon to provide id and version fields. Declare the fields specific to your entity in the subclass. @TaonEntity({ className: 'User' }) export class User extends TaonBaseAbstractEntity { //#region @websql @StringColumn() //#endregion name?: string; }",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/entities.md",
    "headingId": "inject-an-entity-repository",
    "headingTitle": "Inject an entity repository",
    "text": "Inject an entity repository Use this.injectRepo() in your Taon context to get the repository for an entity. Pass the entity class so Taon can resolve the corresponding repository. private readonly userRepository = this.injectRepo(User);",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/entities.md",
    "headingId": "keep-entities-compatible-with-sqlite",
    "headingTitle": "Keep entities compatible with SQLite",
    "text": "Keep entities compatible with SQLite Shared entity definitions must work with SQLite-backed Taon runtimes, including browser WebSQL mode. Follow the column decorators and mappings already used by the project. Prefer Taon column decorators, such as @StringColumn(), for common field types. Avoid declaring raw int column types in shared entities. For whole numbers, use the project's SQLite-compatible integer column mapping. Avoid database-specific column types such as PostgreSQL jsonb, native enums, and array columns in shared entities. Use a representation supported by each target runtime. Keep column defaults, indexes, and constraints portable. Verify that any database expression used by the entity works on each target. When changing the schema of an existing entity, check the corresponding migration against the same runtimes as the entity.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/kv-repositories.md",
    "headingId": "taon-kv-repositories",
    "headingTitle": "Taon KV Repositories",
    "text": "Taon KV Repositories Taon KV repositories provide typed key-value storage through injectable repositories. The API is inspired by key-value systems such as Redis and Cloudflare Workers KV, with a document-oriented approach to storing structured values similar to MongoDB. These comparisons describe the design inspiration. The examples below use Taon’s repository API. Use a KV repository when you read or replace a value by a known key, such as application settings or a cached snapshot. Call the repository from backend code. Browser UI code should access the data through a Taon API endpoint.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/kv-repositories.md",
    "headingId": "define-a-repository",
    "headingTitle": "Define a repository",
    "text": "Define a repository Extend TaonBaseKvRepository and declare the keys and value types in its type parameter. Decorate the class with @TaonRepository. In this example, the users key stores a User[]. setUsers() replaces the array stored under that key, and getUsers() reads the array as a single value. @TaonRepository({ className: 'UserKvRepository', }) export class UserKvRepository extends TaonBaseKvRepository<{ users: User[]; }> { async setUsers(users: User[]): Promise<void> { //#region @websqlFunc await this.set('users', users); //#endregion } async getUsers(): Promise<User[]> { //#region @websqlFunc return await this.get('users'); //#endregion } } The @websqlFunc region markers are Taon build directives. Keep them in the repository methods as shown.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/kv-repositories.md",
    "headingId": "inject-the-repository-into-a-context",
    "headingTitle": "Inject the repository into a context",
    "text": "Inject the repository into a context Add a field to your Taon context and initialize it with injectKvRepository(). private readonly userKvRepository = this.inject( UserKvRepository, );",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/kv-repositories.md",
    "headingId": "choose-the-right-storage-model",
    "headingTitle": "Choose the right storage model",
    "text": "Choose the right storage model Use a KV repository when callers usually work with the whole value under a known key. For example, UserKvRepository can store a snapshot of a user list. If callers need to look up individual users, filter by fields, or update records independently, use an entity repository for those operations.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/middlewares.md",
    "headingId": "taon-middleware-and-interceptors",
    "headingTitle": "Taon middleware and interceptors",
    "text": "Taon middleware and interceptors Taon middleware lets you intercept backend requests and frontend API calls. Server hooks follow the Express middleware pattern. Client hooks follow the Angular HTTP interceptor pattern and work with Axios responses and RxJS. Middleware classes are injectable singletons within their Taon context and can participate in inheritance. Scope Server hook Client hook Entire context interceptServer() interceptClient() All methods of one controller interceptServerMethod() interceptClientMethod() One controller method interceptServerMethod() interceptClientMethod() Controller-wide and endpoint-specific middleware use the same hooks. Where you register the middleware determines which methods it applies to. Intercept server requests across a context Implement interceptServer() to handle server requests across the context. Call next() to continue processing the request. @TaonMiddleware({ className: 'ContextServerMiddleware' }) export class ContextServerMiddleware extends TaonBaseMiddleware { interceptServer({ req, next, }: TaonServerMiddlewareInterceptOptions): Promise<void> | void { console.log(req?.url); next(); } } Intercept client requests across a context Implement interceptClient() to handle client API calls across the context. Return next.handle(req) to forward the request and pass its response back to the caller. @TaonMiddleware({ className: 'ContextClientMiddleware' }) export class ContextClientMiddleware extends TaonBaseMiddleware { interceptClient({ req, next, }: TaonClientMiddlewareInterceptOptions): Observable<AxiosResponse<any>> { console.log(req?.url); return next.handle(req); } } Intercept a controller method on the server Use interceptServerMethod() for middleware attached to a controller or endpoint. The second argument provides information about the matched endpoint, including its method name, Express path, and HTTP request type. You can use async and await before calling next(). Set interceptServer = undefined to keep this middleware scoped to the controller or endpoint on the server. @TaonMiddleware({ className: 'MethodServerMiddleware' }) export class MethodServerMiddleware extends TaonBaseMiddleware { interceptServer = undefined; interceptServerMethod( { next }: TaonServerMiddlewareInterceptOptions, { methodName, expressPath }: TaonAdditionalMiddlewareMethodInfo, ): Promise<void> | void { console.log(methodName, expressPath); next(); } } Intercept a controller method on the client Use interceptClientMethod() to intercept client calls to the controller or endpoint where the middleware is registered. You can use RxJS operators on the response from next.handle(req). This example uses tap() to inspect the response status. Set interceptClient = undefined to keep this middleware scoped to the controller or endpoint on the client. @TaonMiddleware({ className: 'MethodClientMiddleware' }) export class MethodClientMiddleware extends TaonBaseMiddleware { interceptClient = undefined; interceptClientMethod( { req, next }: TaonClientMiddlewareInterceptOptions, { methodName, expressPath }: TaonAdditionalMiddlewareMethodInfo, ): Observable<AxiosResponse<any>> { console.log(methodName, expressPath); return next.handle(req).pipe( tap(response => console.log(response.status)), ); } } Apply middleware to every endpoint in a controller Add the middleware to @TaonController({ middlewares: ... }). Spread parentMiddlewares to retain the middleware supplied by the parent. @TaonController({ className: 'SessionController', middlewares: ({ parentMiddlewares }) => ({ ...parentMiddlewares, MethodServerMiddleware, }), }) export class SessionController extends TaonBaseController { @GET() helloWorld(): Taon.Response<string> { //#region @websqlFunc return async () => 'Hello, world!'; //#endregion } } Apply middleware to one endpoint Add the middleware to the endpoint decorator’s middlewares option. Here, MethodClientMiddleware applies only to helloWorld(). The @websqlFunc region markers in the controller examples are Taon build directives. @TaonController({ className: 'SessionController' }) export class SessionController extends TaonBaseController { @PUT({ middlewares: ({ parentMiddlewares }) => ({ ...parentMiddlewares, MethodClientMiddleware, }), }) helloWorld(): Taon.Response<string> { //#region @websqlFunc return async () => 'Hello, world!'; //#endregion } }",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "taon-migrations",
    "headingTitle": "Taon Migrations",
    "text": "Taon Migrations Taon provides a database migration system built on top of TypeORM, supporting both traditional Node.js backends and WebSQL browser backends . Migration classes are generated automatically, can be shared between Taon projects, and can be versioned in Git alongside application code. Migrations can be executed locally or integrated into CI/CD workflows to keep database schemas synchronized with application changes.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "1-migration-workflow",
    "headingTitle": "1. Migration Workflow",
    "text": "1. Migration Workflow The typical migration workflow is: DATABASE SCHEMA CHANGE │ ▼ CREATE MIGRATION │ ▼ IMPLEMENT up() IMPLEMENT down() │ ▼ REVIEW & ENABLE │ ▼ RUN MIGRATIONS │ ┌───────────┴───────────┐ │ │ ▼ ▼ NODE.JS BACKEND WEBSQL BACKEND │ │ ▼ ▼ SQL DATABASE BROWSER DATABASE Taon manages migration discovery and execution through its context system. Each migration belongs to a specific Taon context, allowing applications with multiple contexts to manage their database changes independently.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "2-interactive-migration-menu",
    "headingTitle": "2. Interactive Migration Menu",
    "text": "2. Interactive Migration Menu The easiest way to manage migrations is through Taon's interactive terminal interface. taon migration Short alias: taon m The terminal menu provides access to migration operations such as creating, running, and reverting migrations. You can also execute these operations directly using CLI commands.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "3-creating-migrations",
    "headingTitle": "3. Creating Migrations",
    "text": "3. Creating Migrations Before generating migrations, start the application at least once so Taon can detect and initialize its active contexts. Then stop the application and execute the command from the Taon project root. taon migration:create my-new-migration Short alias: taon mc my-new-migration Taon generates migration classes for all detected contexts in: src/lib/migrations/",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "example-generated-structure",
    "headingTitle": "Example Generated Structure",
    "text": "Example Generated Structure src/ └── lib/ └── migrations/ ├── MainContext_1735315075962_firstMigration.ts ├── AdminContext_1735315075962_firstMigration.ts └── ReportingContext_1735315075962_firstMigration.ts Each generated migration is associated with its corresponding active context.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "migration-safety",
    "headingTitle": "Migration Safety",
    "text": "Migration Safety Newly generated migrations are disabled by default. isReadyToRun(): boolean { return false; } After implementing and reviewing the migration, enable it: isReadyToRun(): boolean { return true; } This prevents incomplete migration classes from being executed accidentally.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "4-writing-migrations",
    "headingTitle": "4. Writing Migrations",
    "text": "4. Writing Migrations Taon migrations extend TaonBaseMigration and use TypeORM's QueryRunner API. Each migration implements two methods: up() — applies the database changes. down() — reverses the changes when the migration is reverted. Use TypeORM's QueryRunner methods for schema operations such as creating tables, adding columns, and modifying indexes. Raw SQL can be used when the TypeORM API does not support a required operation.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "example-migration",
    "headingTitle": "Example Migration",
    "text": "Example Migration @TaonMigration({ className: 'MainContext_1735315075962_firstMigration', }) export class MainContext_1735315075962_firstMigration extends TaonBaseMigration { anyTaonRepository = this.inject(AnyTaonRepository); isReadyToRun(): boolean { return true; } async up(queryRunner: QueryRunner): Promise<void> { await queryRunner.addColumn( 'users', new TableColumn({ name: 'displayName', type: 'varchar', isNullable: true, }), ); } async down(queryRunner: QueryRunner): Promise<void> { await queryRunner.dropColumn('users', 'displayName'); } }",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "injecting-taon-repositories",
    "headingTitle": "Injecting Taon Repositories",
    "text": "Injecting Taon Repositories Migrations can access Taon repositories using this.inject(). userRepository = this.inject(UserRepository); This can be useful for data transformations requiring application-level logic. For schema changes, prefer working directly with QueryRunner to keep the migration explicit and predictable.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "transactions",
    "headingTitle": "Transactions",
    "text": "Transactions Generated migration templates include transaction handling. Preserve the generated transaction behavior when modifying migration code: BEGIN TRANSACTION │ ▼ EXECUTE up() │ ┌───┴───┐ │ │ SUCCESS ERROR │ │ ▼ ▼ COMMIT ROLLBACK Database engines may differ in their support for transactional schema changes. Always test migrations against the target database.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "5-running-migrations",
    "headingTitle": "5. Running Migrations",
    "text": "5. Running Migrations (Usually you don't need to do that since taon release command includes migration run for every new release/deploy ) Execute pending migrations across all detected contexts: taon migration:run Short alias: taon mr Unlike starting the full application, this command initializes the necessary application contexts, executes migrations, and then exits.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "6-reverting-migrations",
    "headingTitle": "6. Reverting Migrations",
    "text": "6. Reverting Migrations Taon supports reverting migrations using their timestamps. For example, given the migration: MainContext_1735315075962_firstMigration Use the timestamp: taon migration:revert 1735315075962 The terminal menu can also guide you through the revert process. A migration's down() method defines how its changes are reversed. Important: Reverting schema changes may cause data loss, particularly when dropping columns or tables. Always review the migration and back up important data before reverting production databases.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "7-database-recreation-modes",
    "headingTitle": "7. Database Recreation Modes",
    "text": "7. Database Recreation Modes Taon contexts support different database initialization strategies through DBRecreateMode. The selected mode determines whether existing database data is preserved or recreated.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "available-modes",
    "headingTitle": "Available Modes",
    "text": "Available Modes export enum DBRecreateMode { DROP_DB__RUN_MIGRATIONS = 'DROP_DB__RUN_MIGRATIONS', PRESERVE_DATA__RUN_MIGRATIONS = 'PRESERVE_DATA__RUN_MIGRATIONS', } (Websql mode) by default run DROP_DB__RUN_MIGRATIONS and you can change it to PRESERVE_DATA__RUN_MIGRATIONS inside '@taon-dev/sudo' package backoffice. The enum is available from the taon/src package.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "behavior-comparison",
    "headingTitle": "Behavior Comparison",
    "text": "Behavior Comparison Database mode Node.js backend WebSQL browser backend DROP_DB__RUN_MIGRATIONS Drops and recreates the database and entity tables, then saves default entities. Existing data is deleted and migrations are skipped. Recreates the database and entity tables on every page reload, deleting existing data. Migrations are skipped and default entities are saved. PRESERVE_DATA__RUN_MIGRATIONS Preserves existing data, runs pending migrations, and saves default entities. Preserves data across reloads and saves default entities. On the first switch to this mode, existing migrations are marked as completed without execution; subsequent runs execute pending migrations.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "development-mode-recreate-database",
    "headingTitle": "Development Mode — Recreate Database",
    "text": "Development Mode — Recreate Database DROP_DB__RUN_MIGRATIONS is the default development mode. It is useful when: Working on early database schemas. Testing entities without preserving existing data. Frequently changing database structures. Recreating a clean development environment. However, this mode deletes existing database data. Despite the mode's name, migrations are skipped during database recreation.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "persistent-mode-preserve-data",
    "headingTitle": "Persistent Mode — Preserve Data",
    "text": "Persistent Mode — Preserve Data PRESERVE_DATA__RUN_MIGRATIONS keeps existing database data and applies pending migrations. This mode is appropriate when database contents must survive application restarts or page reloads. It is particularly important for production applications and persistent WebSQL environments.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "8-sharing-migrations-between-projects",
    "headingTitle": "8. Sharing Migrations Between Projects",
    "text": "8. Sharing Migrations Between Projects Taon migrations can be shared between standalone projects and container projects, just like other Taon framework classes. This is particularly useful for reusable application libraries that provide their own database entities and repositories. For example: COMPANY CONTAINER │ ┌───────────┴───────────┐ │ │ ▼ ▼ AUTH APP-LIB CUSTOMER APP-LIB │ │ Auth Entities Customer Entities Auth Repositories Customer Repositories Auth Migrations Customer Migrations │ │ └───────────┬───────────┘ │ ▼ MAIN APPLICATION │ ▼ TAON CONTEXTS │ ▼ DATABASES This allows database schema changes to remain close to the functionality that depends on them. Shared migration classes should be managed carefully to avoid duplicate registration or conflicting execution across contexts.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "9-raw-migrations-and-database-snapshots",
    "headingTitle": "9. Raw Migrations and Database Snapshots",
    "text": "9. Raw Migrations and Database Snapshots Schema migrations are not always the best solution for restoring large amounts of development data. Since DROP_DB__RUN_MIGRATIONS recreates the database by default in development mode, developers may need a convenient way to save and restore database contents. Taon provides raw migration and data snapshot functionality through: @taon-dev/sudo The Sudo backoffice can be used to create, export, and restore database snapshots.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "schema-migrations-vs-raw-data-snapshots",
    "headingTitle": "Schema Migrations vs. Raw Data Snapshots",
    "text": "Schema Migrations vs. Raw Data Snapshots Feature Schema migrations Raw migrations / snapshots Main purpose Evolve database structure Save and restore database contents Implementation TypeORM migration classes Sudo backoffice Version control Migration source files Exported snapshot files Typical use Production schema evolution Development data restoration Reversible Through down() when implemented Through restoring a suitable snapshot",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "example-development-workflow",
    "headingTitle": "Example Development Workflow",
    "text": "Example Development Workflow DEVELOPMENT DATABASE │ ▼ EXPORT DATA SNAPSHOT │ ▼ MODIFY ENTITIES │ ▼ RECREATE DATABASE │ ▼ RESTORE DATA SNAPSHOT │ ▼ CONTINUE DEVELOPMENT This is useful for preserving representative development data while working with frequently changing entity definitions. Snapshots should be compatible with the target schema. Restoring data into a changed database structure may require transformation or additional validation.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "10-cli-command-reference",
    "headingTitle": "10. CLI Command Reference",
    "text": "10. CLI Command Reference Command Alias Description taon migration taon m Open the interactive migration menu taon migration:create taon mc Generate migration classes for detected contexts taon migration:run taon mr Run pending migrations and exit taon migration:revert <timestamp> — Revert migration changes using a timestamp",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "create",
    "headingTitle": "Create",
    "text": "Create taon migration:create my-new-migration taon mc my-new-migration",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "run",
    "headingTitle": "Run",
    "text": "Run taon migration:run taon mr",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "revert",
    "headingTitle": "Revert",
    "text": "Revert taon migration:revert 1794523651172",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "interactive-menu",
    "headingTitle": "Interactive Menu",
    "text": "Interactive Menu taon migration taon m",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "11-recommended-practices",
    "headingTitle": "11. Recommended Practices",
    "text": "11. Recommended Practices Keep migrations in version control. Migration history should evolve alongside application code. Review generated migrations before enabling them. Generated classes start with isReadyToRun() returning false for a reason. Implement both up() and down(). Reversible migrations make development and recovery easier, although some data changes cannot be fully reversed. Prefer TypeORM's QueryRunner API. Use raw SQL when necessary and account for database-specific behavior. Test migrations in both Node.js and WebSQL when targeting both runtimes. Shared migration classes do not guarantee identical database engine behavior. Use persistent database mode when data matters. Avoid destructive database recreation outside disposable development environments. Use Sudo snapshots for development data. Schema migrations and database snapshots solve different problems. Integrate migrations into release workflows. Validate database changes before deploying application code that depends on them.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "summary",
    "headingTitle": "Summary",
    "text": "Summary Taon migrations provide a unified way to manage database evolution across Node.js and browser-based WebSQL applications. The migration system integrates with Taon's context architecture, supports reusable migration classes, and can participate in automated build and deployment workflows. One migration architecture. Multiple execution environments. Consistent database evolution.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/providers.md",
    "headingId": "taon-providers",
    "headingTitle": "Taon providers",
    "text": "Taon providers Injectable (service like) classes singleton (in context) classes. Use this class for storing: -configurations for bother backend and frontend resolved environment variables @TaonProvider({ className: 'TaonConfigProvier', }) export class TaonConfigProvier extends TaonBaseProvider { config = { lang: 'en', country: 'Poland' } SECRET_ENV: string; GOOGLE_ID:string; async _() { //#region @backend this.SECRET_ENV = await ENV_NODE_APP_SECRET_ENV(); //#endregion GOOGLE_ID = '123123123123123123123123' } }",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/repositories.md",
    "headingId": "taon-repositories",
    "headingTitle": "Taon repositories",
    "text": "Taon repositories Taon repositories are injectable classes that encapsulate backend data access, similar to TypeORM custom repositories. Use repositories in backend code. Browser UI code accesses their functionality through Taon controller endpoints. Base class When to use it TaonBaseRepository<Entity> Use it for a repository backed by a Taon entity, with built-in CRUD operations and optional custom queries. TaonBaseCustomRepository Use it for backend operations that need their own methods, such as calling an external service. Create an entity repository Extend TaonBaseRepository<User> and set entityClassResolveFn to return the User entity class. Use this.repo to run TypeORM queries against that entity. In this example, findByEmail() looks up a user by email. The @websqlFunc region is a Taon build directive that allows the method implementation to run in the WebSQL backend. @TaonRepository({ className: 'UserRepository' }) export class UserRepository extends TaonBaseRepository<User> { entityClassResolveFn = () => User; async findByEmail(email: string) { //#region @websqlFunc return this.repo.findOne({ where: { email } }); //#endregion } } Create a custom repository Extend TaonBaseCustomRepository when your repository provides custom backend operations. This example delegates checkout URL creation to an application-specific Stripe integration. Implement createCheckoutUrl using your project's Stripe client and server-side configuration. The @backendFunc region is a Taon build directive that keeps the method implementation on the server. @TaonRepository({ className: 'TaonStripeApiRepository' }) export abstract class TaonStripeApiRepository extends TaonBaseCustomRepository { async getCheckoutUrl(): Promise<string> { //#region @backendFunc return this.createCheckoutUrl(); //#endregion } protected abstract createCheckoutUrl(): Promise<string>; }",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/taon-building-blocks/subscriber.md",
    "headingId": "taon-subscribers",
    "headingTitle": "Taon subscribers",
    "text": "Taon subscribers Injectable classes for subscribing to entity events base on https://typeorm.io/listeners-and-subscribers You should use Subscribers only inside server code. @TaonSubscriber({ className: 'TaonSubscriber', }) export class TaonSubscriber extends TaonBaseSubscriberForEntity { listenTo() { return UserEntity; } afterInsert(entity: any) { console.log(`AFTER INSERT: `, entity); MainContext.realtime.server.triggerEntityTableChanges(UserEntity); } }",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/transport-layer.md",
    "headingId": "transport-layer",
    "headingTitle": "Transport layer",
    "text": "Transport layer Taon selects transport according to the application target. The transports are not interchangeable: realtime support and access to platform APIs depend on the runtime. Target Backend location Communication and runtime notes Node.js Node.js server HTTP request/response and Socket.IO-based realtime communication are available. Node.js APIs are available only in the backend. Cloudflare Worker Worker runtime Use request/response APIs supported by the Worker target. Taon's Cloudflare realtime strategy is not implemented, so do not rely on Socket.IO or realtime subscriptions there. WebSQL In the browser Backend logic runs in the browser. It is not a remote Node.js server, and cross-tab realtime communication is not implemented. Electron Electron main process Renderer-to-backend communication uses Electron IPC. Keep privileged Node.js APIs in the backend. Use the target-specific build and test path to verify transport behavior. A successful Node.js build does not prove that code is compatible with a Cloudflare Worker, WebSQL, or Electron. For code that must vary by runtime, use the markers described in Isomorphic code regions. For target setup and limitations, see Architecture.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/what-to-avoid.md",
    "headingId": "what-to-avoid",
    "headingTitle": "What to avoid",
    "text": "What to avoid",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/what-to-avoid.md",
    "headingId": "finish-migration-transactions-correctly",
    "headingTitle": "Finish migration transactions correctly",
    "text": "Finish migration transactions correctly let say we have migration started: await queryRunner.startTransaction(); to end transaction: await queryRunner.release(); // IT IS NOT ENOUGH // and this may cause weird errors // proper 'end' of transaction await queryRunner.commitTransaction(); await queryRunner.release();",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/what-to-avoid.md",
    "headingId": "use-current-timestamp-instead-now",
    "headingTitle": "Use CURRENT_TIMESTAMP instead NOW()",
    "text": "Use CURRENT_TIMESTAMP instead NOW() SQlite does not support NOW()",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/docs/what-to-avoid.md",
    "headingId": "use-integer-instead-int",
    "headingTitle": "Use integer instead int",
    "text": "Use integer instead int SQlite does not support int",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/examples/my-entity.worker.README.md",
    "headingId": "taon-worker-microservice",
    "headingTitle": "Taon Worker/Microservice",
    "text": "Taon Worker/Microservice How to start worker/service // your app app/cli function async startWorker() { const worker = new MyEntityWorker( 'unique-for-the-whole-os-id-for-service', 'command for starting this service. ex: my-entity-cli startWorker' ); const ctrl = await worker.cliStartProcedure(); // by default started as child_process // }",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/angular.md",
    "headingId": "angular-syntax-and-state",
    "headingTitle": "Angular Syntax and State",
    "text": "Angular Syntax and State",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/angular.md",
    "headingId": "template-syntax",
    "headingTitle": "Template syntax",
    "text": "Template syntax Prefer modern Angular control-flow syntax: @if @else @for @switch @defer Use legacy structural directives such as *ngIf and *ngFor only when there is a concrete reason to do so. Do not convert modern Angular control flow back to legacy syntax.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/angular.md",
    "headingId": "signals-and-observables",
    "headingTitle": "Signals and Observables",
    "text": "Signals and Observables Prefer Angular Signals for component state and reactive values used directly by templates. Prefer: signal() computed() effect() when an actual side effect is required Do not introduce an Observable when a Signal provides a simpler solution. Use RxJS Observables when they naturally fit the problem, especially for: asynchronous streams, REST/API calls, event streams, RxJS operators and stream composition, existing APIs that already expose Observables. Do not convert an Observable to a Signal merely for the sake of using Signals. Avoid unnecessary BehaviorSubject / Subject state when a Signal can represent the same state more clearly.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/angular.md",
    "headingId": "services",
    "headingTitle": "Services",
    "text": "Services",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/angular.md",
    "headingId": "api-services",
    "headingTitle": "API services",
    "text": "API services Inject the project's api.service.ts into components when communication with the Taon REST API is required. Do not create duplicate HTTP/API logic directly inside components when the existing API service can be used.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/angular.md",
    "headingId": "configuration-services",
    "headingTitle": "Configuration services",
    "text": "Configuration services Inject the project's config.service.ts / configs.service.ts when a component needs global frontend/backend configuration. Do not duplicate global configuration as local component state.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/angular.md",
    "headingId": "state-services",
    "headingTitle": "State services",
    "text": "State services Create a dedicated .state.service.ts only when the component architecture actually requires shared or sufficiently complex state. Do NOT create a state service automatically for every component. Prefer keeping simple state directly inside the component using Signals. Create a state service when, for example: state is shared between multiple components, state must survive component recreation, state logic becomes large enough that keeping it in the component hurts readability, multiple components need to coordinate through the same state.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/angular.md",
    "headingId": "dependency-injection",
    "headingTitle": "Dependency Injection",
    "text": "Dependency Injection Always prefer Angular's inject() API over constructor injection. GOOD: private readonly router = inject(Router); private readonly changeDetectorRef = inject(ChangeDetectorRef); private readonly apiService = inject(MyApiService); BAD: constructor( private router: Router, private changeDetectorRef: ChangeDetectorRef, private apiService: MyApiService, ) {} Use constructor injection only when there is a specific technical reason that prevents using inject().",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/angular.md",
    "headingId": "injection-naming",
    "headingTitle": "Injection naming",
    "text": "Injection naming Use descriptive names based on the injected class/service. GOOD: private readonly userService = inject(UserService); private readonly notificationService = inject(NotificationService); private readonly sessionApiService = inject(TaonSessionApiService); Short conventional names are allowed for common Angular/router dependencies where they improve readability: private readonly cdr = inject(ChangeDetectorRef); private readonly router = inject(Router); private readonly route = inject(ActivatedRoute); Do not use arbitrary abbreviated names for application services.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/angular.md",
    "headingId": "component-internationalization-i18n",
    "headingTitle": "Component Internationalization (i18n)",
    "text": "Component Internationalization (i18n) All user-visible component text should use the Taon translation system when appropriate. For all internationalization rules and examples, follow: ../docs/i18n.md Before adding, modifying, or reviewing any user-visible text in Angular code, read and follow ../docs/i18n.md. Treat ../docs/i18n.md as the single source of truth for: translation setup Signal translations synchronous translations Observable translations template translations translation parameters translation context deciding which strings should and should not be translated Do not duplicate or invent alternative i18n patterns in Angular code. If this file and ../docs/i18n.md appear to conflict regarding internationalization, ../docs/i18n.md takes precedence.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/backend.md",
    "headingId": "backend",
    "headingTitle": "Backend",
    "text": "Backend",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/backend.md",
    "headingId": "isomorphic-source",
    "headingTitle": "Isomorphic source",
    "text": "Isomorphic source Do not assume that a .ts file containing backend code is backend-only. Taon transforms shared source for different runtimes. Isolate code that uses runtime-specific APIs with the appropriate markers: @backend and @backendFunc for backend code. @websql and @websqlFunc for code included in Node.js and WebSQL builds. @browser for browser-only code. @websqlOnly for WebSQL-only code. @esmRemove and @cjsRemove for backend module-format differences. See Isomorphic code regions for marker semantics and examples.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/backend.md",
    "headingId": "runtime-differences",
    "headingTitle": "Runtime differences",
    "text": "Runtime differences Taon supports these distinct backend targets: Node.js has access to Node.js APIs according to the app's environment and permissions. Cloudflare Workers use an ESM runtime with Worker APIs and do not provide the full Node.js runtime. WebSQL runs backend logic in the browser. Electron uses a main-process backend with privileged Node.js APIs. Review Transport layer before relying on networking, realtime communication, or platform APIs across targets.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/backend.md",
    "headingId": "runtime-specific-functions",
    "headingTitle": "Runtime-specific functions",
    "text": "Runtime-specific functions Wrap a function body in @backendFunc when it requires Node.js-only APIs. The browser build keeps the function and returns undefined. export namespace Utils { export const createBackendFile = () => { //#region @backendFunc /* ... */ //#endregion }; } Use @websqlFunc instead when the implementation should be included in both Node.js and WebSQL builds. export namespace Utils { export const createBackendFile = () => { //#region @websqlFunc /* ... */ //#endregion }; }",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/environment-variables.md",
    "headingId": "where-environment-variables-are-stored",
    "headingTitle": "Where environment variables are stored",
    "text": "Where environment variables are stored Each Taon Project stores its environment variables — both secret and public — in: /env.ts # Main root file with environment variables /environments/**/env.*.ts # Environment files for specific build artifacts/environments",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/environment-variables.md",
    "headingId": "example-content-of-an-env-ts-file",
    "headingTitle": "Example content of an env.*.ts file",
    "text": "Example content of an env.*.ts file import type { EnvOptions } from 'tnp/src'; const env: Partial<EnvOptions> = { website: { domain: 'example.domain.com', title: 'My Example Website', useDomain: true, }, config: { /* * A string wrapped with TAON_ENCRYPTED_START and TAON_ENCRYPTED_END * means that the value is encrypted. * * You can decode it by running `taon env:decode` and providing * the correct master password. */ secretApiKey: () => `$$$TAON_ENCRYPTED_START$$asdasdasdasdasdasdBQ==$$$TAON_ENCRYPTED_END$$$`, publicKey: 'ANY_PUBLIC_KEY', }, }; export default env;",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/environment-variables.md",
    "headingId": "starting-an-environment-configuration-from-scratch",
    "headingTitle": "Starting an environment configuration from scratch",
    "text": "Starting an environment configuration from scratch You can initially define your environment file with a plain-text secret: import type { EnvOptions } from 'tnp/src'; const env: Partial<EnvOptions> = { website: { domain: 'example.domain.com', title: 'My Example Website', useDomain: true, }, config: { /* * Use `taon env:encode` with a master password of your choice * to encrypt this value. * * After encryption, the value will be wrapped with * TAON_ENCRYPTED_START and TAON_ENCRYPTED_END markers. */ secretApiKey: () => `my secret api key that should NOT be committed to the repository in decoded form!`, publicKey: 'ANY_PUBLIC_KEY', }, }; export default env; Important: Do not commit the file while secret values are still stored in plain text. Run taon env:encode first.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/environment-variables.md",
    "headingId": "how-to-access-environment-variables",
    "headingTitle": "How to access environment variables",
    "text": "How to access environment variables Use the generated environment variables from: /src/lib/env/**",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/environment-variables.md",
    "headingId": "secret-variables",
    "headingTitle": "Secret variables",
    "text": "Secret variables Secret variables are generated as functions returning promises and must be awaited: // DO NOT USE THESE VARIABLES ON THE FRONTEND! export const ENV_ANGULAR_NODE_APP_CONFIG_SECRET_API_KEY = (): Promise<string> => decodeEnv('MY_SECRET_API_KEY'); // DO NOT USE THESE VARIABLES ON THE FRONTEND!",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/environment-variables.md",
    "headingId": "public-variables",
    "headingTitle": "Public variables",
    "text": "Public variables Public variables are usually regular strings, numbers, or booleans: // SAFE TO USE ON BOTH FRONTEND AND BACKEND export const ENV_ANGULAR_NODE_APP_CONFIG_PUBLIC_KEY = 'ANY_PUBLIC_KEY';",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/environment-variables.md",
    "headingId": "preferred-way-of-using-environment-variables",
    "headingTitle": "Preferred way of using environment variables",
    "text": "Preferred way of using environment variables",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/environment-variables.md",
    "headingId": "1-create-a-provider",
    "headingTitle": "1. Create a provider",
    "text": "1. Create a provider Use a provider as the central place where generated environment variables are resolved and assigned. @TaonProvider({ className: 'MyEntityProvider', }) export class MyEntityProvider extends TaonBaseProvider { declare SECRET_API_KEY: string; declare PUBLIC_KEY: string; async _() { // Assign environment variables in one place. this.PUBLIC_KEY = ENV_ANGULAR_NODE_APP_CONFIG_PUBLIC_KEY; //#region @backend this.SECRET_API_KEY = await ENV_ANGULAR_NODE_APP_CONFIG_SECRET_API_KEY(); //#endregion /* * This method is executed during context initialization, * so it is the preferred place to resolve and assign * environment variables. */ } }",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/environment-variables.md",
    "headingId": "2-inject-the-provider-into-controllers-repositories-etc",
    "headingTitle": "2. Inject the provider into controllers, repositories, etc.",
    "text": "2. Inject the provider into controllers, repositories, etc. This is the preferred way to access environment variables on the backend: inject the provider. @TaonProvider({ className: 'MyEntityRepository', }) export class MyEntityRepository extends TaonBaseRepostory { protected myEntityProvider = this.inject(MyEntityProvider); @GET() getSecret(): Taon.Response<string> { //#region @websqlFunc return async (req, res) => { return requestToExternalApi({ secret: this.myEntityProvider.SECRET_API_KEY, }); }; //#endregion } }",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/environment-variables.md",
    "headingId": "3-create-config-service-ts-to-access-public-variables-on-the-frontend",
    "headingTitle": "3. Create config.service.ts to access public variables on the frontend",
    "text": "3. Create config.service.ts to access public variables on the frontend This is the preferred way to access public environment variables on the frontend: inject a config service. import { inject, Injectable } from '@angular/core'; import { TaonBaseAngularService } from 'taon/src'; @Injectable() export class MyEntityConfigService extends TaonBaseAngularService { protected myEntityProvider = this.inject(MyEntityProvider); requestWithPublicKey() { fetchSomething({ publicKey: this.myEntityProvider.PUBLIC_KEY, }); } } @Component({ selector: 'my-example-component', // ... }) export class MyExampleComponent { myEntityConfigService = inject(MyEntityConfigService); ngOnInit() { this.myEntityConfigService.requestWithPublicKey(); } }",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/environment-variables.md",
    "headingId": "what-not-to-do",
    "headingTitle": "What NOT to do",
    "text": "What NOT to do Do not run taon env:decode before starting a Taon build, such as: taon build:watch:lib taon app You will be asked for the master password when necessary. During the build, Taon automatically creates a decoded copy of: /env.ts /environments/** inside the tmp-env folder. Do not worry if an encrypted value looks different after running taon env:decode or another environment operation. For example: $$$TAON_ENCRYPTED_START$$...$$$TAON_ENCRYPTED_END$$$ The encrypted representation may change. This is normal. The encryption mechanism can rotate the encrypted representation while the master password remains the same. Never commit unencrypted secret variables. Do NOT commit: // UNSAFE — DO NOT COMMIT mySecretApiKey: () => `my-secret-api`, Always use: taon env:encode before committing files containing secrets. Secret values inside /env.ts and /environments/** should be encrypted: // SAFE TO COMMIT mySecretApiKey: () => `$$$TAON_ENCRYPTED_START$$euhauidhaisre$$$TAON_ENCRYPTED_END$$$`,",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/environment-variables.md",
    "headingId": "additional-rules-for-ai-agents",
    "headingTitle": "Additional rules for AI agents",
    "text": "Additional rules for AI agents When working with Taon environment variables, an AI agent must: Use only generated environment variables from: /src/lib/env/** Never attempt to encrypt or decrypt environment variables. Never run: taon env:decode Never run: taon env:encode Never access or expose the master password. Never replace generated environment variables with hardcoded secret values.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/environment-variables.md",
    "headingId": "how-to-generate-a-master-password",
    "headingTitle": "How to generate a master password",
    "text": "How to generate a master password Use: taon env:gen:pass Alternatively, use the interactive environment menu: taon env",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/environment-variables.md",
    "headingId": "how-the-master-password-is-preserved-locally",
    "headingTitle": "How the master password is preserved locally",
    "text": "How the master password is preserved locally The master password is securely preserved by the Taon worker for 1 day. The Taon CLI preserves the password only after verifying that it is correct. You can remove the preserved master password from the worker at any time.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/environment-variables.md",
    "headingId": "how-to-remove-the-master-password-from-the-worker",
    "headingTitle": "How to remove the master password from the worker",
    "text": "How to remove the master password from the worker Use: taon env:rm:pass Alternatively, use the interactive environment menu: taon env",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/file-naming-conventions.md",
    "headingId": "file-naming-and-layout-conventions",
    "headingTitle": "File Naming and Layout Conventions",
    "text": "File Naming and Layout Conventions",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/file-naming-conventions.md",
    "headingId": "typescript-filenames",
    "headingTitle": "TypeScript filenames",
    "text": "TypeScript filenames Use a lowercase kebab-case base name followed by dot-separated suffixes that identify the file’s role. The base name should usually match the feature or subfeature folder that owns the file. Class name Filename MyFeatureEntity my-feature.entity.ts MyFeatureController my-feature.controller.ts MyFeatureRepository my-feature.repository.ts MyFeatureApiService my-feature.api.service.ts MyFeatureConfigService my-feature.config.service.ts MyFeatureStateService my-feature.state.service.ts MyFeatureComponent my-feature.component.ts MyFeatureAbstractContext my-feature.abstract.context.ts MyFeatureActiveContext my-feature.active.context.ts",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/file-naming-conventions.md",
    "headingId": "angular-component-files",
    "headingTitle": "Angular component files",
    "text": "Angular component files Keep each Angular component’s TypeScript, HTML template, and SCSS styles in separate files in the same folder. Use the same .component filename stem for all three. Reference the external files through templateUrl and styleUrl (or styleUrls). my-feature-backoffice/ my-feature-backoffice.component.ts my-feature-backoffice.component.html my-feature-backoffice.component.scss my-feature-backoffice.state.service.ts",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/file-naming-conventions.md",
    "headingId": "feature-folder-layout",
    "headingTitle": "Feature folder layout",
    "text": "Feature folder layout Keep feature-level entities, controllers, and repositories in the feature folder. When a feature contains both a controller and Angular components, put each component in its own subfolder and use the subfolder name as the component’s filename base. my-feature/ my-feature.entity.ts my-feature.controller.ts my-feature.repository.ts my-feature-table/ my-feature-table.component.ts my-feature-table.component.html my-feature-table.component.scss my-feature-row/ my-feature-row.component.ts my-feature-row.component.html my-feature-row.component.scss",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/general.md",
    "headingId": "general-rules",
    "headingTitle": "General Rules",
    "text": "General Rules",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/general.md",
    "headingId": "taon-project-structure",
    "headingTitle": "Taon Project Structure",
    "text": "Taon Project Structure You are operating inside a Taon workspace. Taon projects do not necessarily follow a standard npm repository structure. Before making any changes, identify the relevant Taon project(s) and inspect their root taon.jsonc.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/general.md",
    "headingId": "project-types",
    "headingTitle": "Project Types",
    "text": "Project Types Taon has two project types. Standalone project A standalone project has: { \"type\": \"isomorphic-lib\" } in its root /taon.jsonc. Characteristics: Application/library source code is located in /src. It may be an independent Git repository. It may also exist inside a Taon container project. This is normally where production source-code changes should be made. Container project A container project has: { \"type\": \"container\" } in its root /taon.jsonc. Characteristics: It contains multiple standalone projects and/or other container projects. Treat child projects as separate Taon projects. A task may require inspecting or modifying multiple child projects. Never create Git branches in a container project. When working from a high-level workspace containing multiple Taon projects, do not assume that the workspace root itself is the project being modified. Locate the appropriate standalone project first.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/general.md",
    "headingId": "allowed-modification-scope",
    "headingTitle": "Allowed Modification Scope",
    "text": "Allowed Modification Scope",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/general.md",
    "headingId": "source-files-only",
    "headingTitle": "Source files only",
    "text": "Source files only Unless the user explicitly instructs otherwise in the current prompt, you may only create, modify, move, or delete files inside the /src directory of the relevant standalone project(s). For example, if a task affects: /taon-dev/cms /taon-projects/cms the allowed modification scope is: /taon-dev/cms/src/** /taon-projects/cms/src/** You may inspect files outside /src when necessary to understand the project, dependencies, architecture, configuration, or existing conventions. However, inspection does not grant permission to modify those files.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/general.md",
    "headingId": "allowed",
    "headingTitle": "Allowed",
    "text": "Allowed You may: read files anywhere in the relevant workspace when needed for context create files inside the relevant project's /src modify files inside the relevant project's /src move files inside the relevant project's /src delete files inside the relevant project's /src when required by the task inspect sibling projects to understand existing Taon patterns and implementations",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/general.md",
    "headingId": "forbidden",
    "headingTitle": "Forbidden",
    "text": "Forbidden Do not create, modify, move, or delete files outside the relevant project's /src. This includes, but is not limited to: /package.json /taon.jsonc /tsconfig.json /angular.json /.github/** /.ai/** /node_modules/** /dist/** If completing part of the requested task would require changing a file outside /src, do not make that change. Implement everything that can correctly be implemented within the allowed scope and leave the out-of-scope part unchanged. Do not silently work around this restriction by modifying another configuration or generated file.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/general.md",
    "headingId": "multi-project-tasks",
    "headingTitle": "Multi-Project Tasks",
    "text": "Multi-Project Tasks A single task may involve multiple Taon projects. For example: /taon-dev/cms /taon-projects/cms When this happens: Identify every project involved in the task. Determine whether each project is a standalone project or a container. Inspect the relevant projects before implementing the change. Keep reusable/framework functionality in the appropriate reusable Taon project. Keep application-specific functionality in the consuming application. Modify only /src/** within each affected standalone project. Do not duplicate reusable functionality in consuming projects when it belongs in a shared Taon project. Do not assume that a task must be contained within a single Git repository merely because the agent was started from a common parent directory.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/general.md",
    "headingId": "project-and-artifact-management",
    "headingTitle": "Project and Artifact Management",
    "text": "Project and Artifact Management Project and artifact management is the user's responsibility. Do not: initialize Taon projects create Git branches in container projects build Taon projects or artifacts publish packages release packages or applications deploy applications install dependencies update dependencies run project setup commands run project initialization commands modify generated artifacts Your responsibility normally ends after making the requested production source-code changes inside the appropriate /src directories.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/general.md",
    "headingId": "taon-cli-commands",
    "headingTitle": "Taon CLI Commands",
    "text": "Taon CLI Commands Do not run taon commands. The only exception is migration creation: taon mc my-new-migration and language extractor taon lang:extract Do not run any other taon command unless the user explicitly requests it in the current prompt.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/general.md",
    "headingId": "absolute-rule-never-create-or-modify-tests",
    "headingTitle": "ABSOLUTE RULE: Never Create or Modify Tests",
    "text": "ABSOLUTE RULE: Never Create or Modify Tests Testing is not part of your responsibility unless explicitly requested by the user in the current prompt. You MUST NOT create, generate, modify, move, or delete test files or test directories. This includes, but is not limited to: *.spec.ts *.test.ts *.spec.js *.test.js /test/** /tests/** /__tests__/** It also includes: test fixtures test helpers temporary test files test configuration generated tests modifications to existing tests Do NOT add or modify tests merely because: the implementation would normally require tests existing code has tests repository conventions suggest tests tests would help verify the implementation adding tests is considered best practice acceptance criteria describe expected behavior Do not create temporary tests and delete them afterward. If a requested task would normally include test changes, skip the test portion and implement only the production source code.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/general.md",
    "headingId": "explicit-user-override",
    "headingTitle": "Explicit User Override",
    "text": "Explicit User Override Tests may be created or modified only when the user explicitly requests test work in the current prompt. Do not infer permission from: previous prompts previous tasks existing tests repository conventions the nature of the feature acceptance criteria best practices",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/general.md",
    "headingId": "configuration-and-dependencies",
    "headingTitle": "Configuration and Dependencies",
    "text": "Configuration and Dependencies Unless explicitly requested otherwise, never modify project, package, build, or workspace configuration. In particular, never modify: /package.json /taon.jsonc Do not: modify node_modules install packages remove packages update package versions modify dependency declarations If a requested implementation appears to require a new dependency, do not install or add it automatically. Prefer functionality already available in the workspace when appropriate, or leave the dependency/configuration portion unchanged.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/general.md",
    "headingId": "task-boundaries",
    "headingTitle": "Task Boundaries",
    "text": "Task Boundaries Implement the requested task and avoid unrelated cleanup. Do not perform additional: refactoring unrelated to the task project maintenance dependency maintenance configuration changes test work builds publishing releasing deployment repository restructuring Existing code in sibling Taon projects may be inspected and reused as a reference when useful.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/general.md",
    "headingId": "highest-priority-working-rule",
    "headingTitle": "Highest-Priority Working Rule",
    "text": "Highest-Priority Working Rule Unless the user explicitly overrides these rules in the current prompt: All modifications must be limited to /src/** of the standalone Taon project or projects involved in the task. You may inspect the wider Taon workspace, including containers and sibling projects, to understand architecture and existing implementations. Read broadly when necessary. Modify narrowly.",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/npm-yarn-packages.md",
    "headingId": "npm-yarn-install-packages",
    "headingTitle": "npm yarn install/packages",
    "text": "npm yarn install/packages do NOT install ANYTHING from package.json do NOT install new npm/yarn packages do not use npm install or yarn add don't change package.json or any files except from /src folder don't change node_modules",
    "api": false
  },
  {
    "filePath": "baseline-docs/.ai/rules/typescript.md",
    "headingId": "typescript-rules",
    "headingTitle": "TypeScript rules",
    "text": "TypeScript rules Never use any unless absolutely necessary. Prefer const. Prefer assigned tp const arrow function over standard function() with function keyword . Prefer early returns. Do not create interfaces that are used only once. Do not add comments explaining obvious code. Preserve existing //#region structure.",
    "api": false
  },
  {
    "filePath": "baseline-docs/AGENTS.md",
    "headingId": "taon-project-instructions",
    "headingTitle": "Taon project instructions",
    "text": "Taon project instructions This project uses Taon. Read the applicable reference before changing code, and verify framework behavior against the implementation when a guide does not cover it.",
    "api": false
  },
  {
    "filePath": "baseline-docs/AGENTS.md",
    "headingId": "core-rules",
    "headingTitle": "Core rules",
    "text": "Core rules Do not install dependencies with npm install or yarn install; use the Taon project workflow. Make application changes in /src, preserve Taon patterns and generated files, and do not reformat unrelated code. Reuse existing classes and helpers. Do not replace Taon conventions with conventional Angular, Express, or TypeORM patterns without checking the project guidance first. Keep code changes surgical. Do not modify sibling projects.",
    "api": false
  },
  {
    "filePath": "baseline-docs/AGENTS.md",
    "headingId": "references",
    "headingTitle": "References",
    "text": "References Architecture and runtime targets Taon contexts Isomorphic code regions Building-block references Coding rules Canonical examples",
    "api": false
  },
  {
    "filePath": "baseline-docs/AGENTS.md",
    "headingId": "existing-code-and-verification",
    "headingTitle": "Existing code and verification",
    "text": "Existing code and verification Before creating an abstraction, search /src for an equivalent implementation. For Taon CLI workflows, see the CLI command guide. The project's tests and the Taon Testbench are useful for runtime-specific examples; do not assume that Node.js, WebSQL, and Cloudflare Worker support are interchangeable. After code changes, run the smallest relevant test or build available in the project. Do not claim a command or runtime behavior is verified unless it was checked against source or a working example.",
    "api": false
  },
  {
    "filePath": "baseline-docs/README.md",
    "headingId": "baseline-docs",
    "headingTitle": "baseline-docs",
    "text": "baseline-docs Welcome. Taon docs are amazing !",
    "api": false
  }
] as any;

export default BaselineDocsDocsIndexData;
