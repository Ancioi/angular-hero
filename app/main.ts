/**
 * @author Franceco Borgosano
 * Created on 17/10/2016.
 *
 * This code initializes the platform that your application runs in
 * then uses the platform to bootstrap your AppModule.
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);

