"use strict";
/**
 * @author Franceco Borgosano
 * Created on 17/10/2016.
 *
 * This code initializes the platform that your application runs in
 * then uses the platform to bootstrap your AppModule.
 */
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app.module');
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map