import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { ELEMENT_PROBE_PROVIDERS } from '@angular/platform-browser';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';
import {TRANSLATE_PROVIDERS} from 'ng2-translate/ng2-translate';
import { AppComponent } from './app/app';

import './style/app.scss';

const ENV_PROVIDERS = [];
// depending on the env mode, enable prod mode or add debugging modules
if (process.env.ENV === 'build') {
  enableProdMode();
} else {
  ENV_PROVIDERS.push(ELEMENT_PROBE_PROVIDERS);
}

bootstrap(AppComponent, [
    // These are dependencies of our App
    ...TRANSLATE_PROVIDERS,
    ...HTTP_PROVIDERS,
    ...ROUTER_PROVIDERS,
    ...ENV_PROVIDERS,
    { provide: LocationStrategy, useClass: HashLocationStrategy } // use #/ routes, remove this for HTML5 mode
  ])
  .catch(err => console.error(err));
