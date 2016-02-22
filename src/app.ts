import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { SomeComponent } from './SomeComponent';
import { OtherComponent } from './OtherComponent';
//import { CharacterService } from './character.service';

@Component({
  selector: 'my-app',
  template: `
    <a [routerLink]="['Some']">Dashboard</a>
    <a [routerLink]="['Other']">Characters</a>
    <router-outlet></router-outlet>
    `,
  directives: [ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS]
})
@RouteConfig([
    { path: '/some', as: 'Some', component: SomeComponent, useAsDefault: true },
  { path: '/other', as: 'Other', component: OtherComponent }
])
export class AppComponent { }