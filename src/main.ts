import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import {
  BrowserModule,
  bootstrapApplication,
  provideProtractorTestingSupport,
} from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

import routeConfig from './app/routes';
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    provideHttpClient(),
    provideProtractorTestingSupport(),
    provideRouter(routeConfig),
    provideAnimations(),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          apiKey: 'AIzaSyBp9w4oil77XT3FYITOpZrQ5Iozpq4y3_g',
          authDomain: 'bricool-ginf.firebaseapp.com',
          databaseURL: 'https://bricool-ginf-default-rtdb.firebaseio.com',
          projectId: 'bricool-ginf',
          storageBucket: 'bricool-ginf.appspot.com',
          messagingSenderId: '160115731845',
          appId: '1:160115731845:web:171092878c4d83baf1e8ec',
          measurementId: 'G-75LJXWH7CW',
        })
      ),
      provideAuth(() => getAuth()),
      provideFirestore(() => getFirestore()),
      provideDatabase(() => getDatabase())
    ),
  ],
}).catch((err) => console.error(err));
