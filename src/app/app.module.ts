import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { MatToolbarModule } from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HomeComponent } from './home/home.component';
export function myFunc(): string { return 'shopping-reader'; }

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'shopping-reader'), // imports firebase/app needed for everything
    AngularFireAnalyticsModule, // dynamically imports firebase/analytics
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, BrowserAnimationsModule,  // imports firebase/storage only needed for storage features
    NgxAuthFirebaseUIModule.forRoot(
      {
        apiKey: "AIzaSyC-kjrwLy3BCWsSyqq0AhPVvdrpMYSH8AY",
        authDomain: "shopping-reader.firebaseapp.com",
        databaseURL: "https://shopping-reader.firebaseio.com",
        projectId: "shopping-reader",
        storageBucket: "shopping-reader.appspot.com",
        messagingSenderId: "347903099359",
        appId: "1:347903099359:web:65c82991894d4d78cc046a",
        measurementId: "G-YYF9G4GJ3S"
      },
      myFunc,
      {
        enableFirestoreSync: true, // enable/disable autosync users with firestore
        toastMessageOnAuthSuccess: false, // whether to open/show a snackbar message on auth success - default : true
        toastMessageOnAuthError: false, // whether to open/show a snackbar message on auth error - default : true
        authGuardFallbackURL: '/loggedout', // url for unauthenticated users - to use in combination with canActivate feature on a route
        authGuardLoggedInURL: '/loggedin', // url for authenticated users - to use in combination with canActivate feature on a route
        passwordMaxLength: 60, // `min/max` input parameters in components should be within this range.
        passwordMinLength: 8, // Password length min/max in forms independently of each componenet min/max.
        // Same as password but for the name
        nameMaxLength: 50,
        nameMinLength: 2,
        // If set, sign-in/up form is not available until email has been verified.
        // Plus protected routes are still protected even though user is connected.
        guardProtectedRoutesUntilEmailIsVerified: true,
        enableEmailVerification: true, // default: true
      }
    ),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
