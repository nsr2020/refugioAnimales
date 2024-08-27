import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withNoHttpTransferCache } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { loadingReducer } from './core/store/reducers/loading.reducers';
import { animalReducer } from './core/store/reducers/animals.reducers';
import { AnimalsEffects } from './core/store/effects/animals.effects';
import { handleLoadingReducer } from './core/store/app.metareducers';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(
      withNoHttpTransferCache()
    ),
    provideStore({
      loading: loadingReducer,
      animals: animalReducer
    }, {
      metaReducers: [handleLoadingReducer]
    }),
    provideEffects([
      AnimalsEffects
    ]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideHttpClient(withFetch())
  ]
};
