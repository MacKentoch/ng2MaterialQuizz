import {
  it,
  inject,
  injectAsync,
  beforeEachProviders
}                         from '@angular/core/testing';
// to use Translate Service, we need Http, and to test Http we need to mock the backend
import {
  BaseRequestOptions,
  Http,
  Response,
  ResponseOptions
}                         from '@angular/http';
import {MockBackend}      from '@angular/http/testing';
import {provide}          from "@angular/core";
// Load the implementations that should be tested
// import {Api} from './services/api/api';
import { AppComponent }   from './app';


describe('AppComponent', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    // App,
    // Api,
    BaseRequestOptions,
    MockBackend,
    // Provide a mocked (fake) backend for Http
    provide(Http, {
      useFactory: function useFactory(backend, defaultOptions) {
        return new Http(backend, defaultOptions);
      },
      deps: [MockBackend, BaseRequestOptions]
    })
  ]);

  it('should have a non-empty appHeaderMenuModel', inject([AppComponent], (app: AppComponent) => {
    expect(app.appHeaderMenuModel.length).toBeGreaterThan(0);
  }));
});
