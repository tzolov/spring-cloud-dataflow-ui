var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"aboutRoutes","filename":"src/app/about/about-routing.module.ts","module":"AboutRoutingModule","children":[{"path":"about","canActivate":["AuthGuard"],"data":{"authenticate":true,"roles":["ROLE_VIEW"]},"children":[{"path":"","component":"AboutComponent"},{"path":"details","component":"AboutDetailsComponent"}]}],"kind":"module"},{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","pathMatch":"full","redirectTo":"apps"}],"kind":"module"},{"name":"appsRoutes","filename":"src/app/apps/apps-routing.module.ts","module":"AppsRoutingModule","children":[{"path":"apps","canActivate":["AuthGuard"],"data":{"authenticate":true,"roles":["ROLE_VIEW"]},"children":[{"path":"","component":"AppsComponent"},{"path":"bulk-import-apps","component":"AppsBulkImportComponent","canActivate":["AuthGuard"],"data":{"authenticate":true,"roles":["ROLE_CREATE"]}},{"path":"register-apps","component":"AppsRegisterComponent","canActivate":["AuthGuard"],"data":{"authenticate":true,"roles":["ROLE_CREATE"]}},{"path":":appType/:appName","component":"AppDetailsComponent"}]}],"kind":"module"},{"name":"streamRoutes","filename":"src/app/streams/streams-routing.module.ts","module":"StreamsRoutingModule","children":[{"path":"streams","component":"StreamsComponent","canActivate":["AuthGuard"],"data":{"authenticate":true,"roles":["ROLE_VIEW"],"feature":"streamsEnabled"},"children":[{"path":"","pathMatch":"full","redirectTo":"definitions"},{"path":"definitions","component":"StreamDefinitionsComponent"},{"path":"definitions/:id","component":"StreamDetailsComponent"},{"path":"definitions/:id/deploy","component":"StreamDeployComponent","canActivate":["AuthGuard"],"data":{"authenticate":true,"roles":["ROLE_CREATE"]}},{"path":"create","component":"StreamCreateComponent"}]}],"kind":"module"},{"name":"authRoutes","filename":"src/app/auth/auth-routing.module.ts","module":"AuthRoutingModule","children":[{"path":"login","component":"LoginComponent"},{"path":"logout","component":"LogoutComponent"},{"path":"feature-disabled","component":"FeatureDisabledComponent"},{"path":"roles-missing","component":"RolesMissingComponent"}],"kind":"module"},{"name":"taskRoutes","filename":"src/app/tasks/tasks-routing.module.ts","module":"TasksRoutingModule","children":[{"path":"tasks","component":"TasksComponent","canActivate":["AuthGuard"],"data":{"authenticate":true,"roles":["ROLE_VIEW"],"feature":"tasksEnabled"},"children":[{"path":"","pathMatch":"full","redirectTo":"definitions"},{"path":"apps","component":"TaskAppsComponent"},{"path":"apps/:id","component":"TaskAppDetailsComponent"},{"path":"apps/:id/task-create","component":"TaskCreateComponent","canActivate":["AuthGuard"],"data":{"authenticate":true,"roles":["ROLE_CREATE"]}},{"path":"executions","component":"TaskExecutionsComponent"},{"path":"executions/:id","component":"TaskExecutionsDetailsComponent"},{"path":"create-composed-task","component":"TaskCreateComposedTaskComponent"},{"path":"bulk-define-tasks","component":"TaskBulkDefineComponent"},{"path":"definitions","component":"TaskDefinitionsComponent"},{"path":"definitions/launch/:id","component":"TaskLaunchComponent"},{"path":"definitions/:id","component":"ComposedTaskDetailsComponent"}]}],"kind":"module"}]}
