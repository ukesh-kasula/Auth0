import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAuth0 } from '@auth0/auth0-angular';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideAuth0({
      domain: 'dev-ae1sdwnunb506lex.us.auth0.com',
      clientId: '9B09DOUXDrMxWwlK35tcJKdaahlDw9SX',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
    provideRouter(routes)
  ]
})
