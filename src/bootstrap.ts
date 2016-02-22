import 'reflect-metadata';
import {provide} from 'angular2/core';
import {APP_BASE_HREF, LocationStrategy, HashLocationStrategy, ROUTER_PROVIDERS} from 'angular2/router';
import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app';

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    provide(APP_BASE_HREF, { useValue: '/' }),
    provide(LocationStrategy, { useClass: HashLocationStrategy })
]);