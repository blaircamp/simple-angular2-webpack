///<reference path="../typings/main.d.ts"/>
 
import 'reflect-metadata';
import 'angular2/bundles/angular2-polyfills'
import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {RouteConfig, RouterLink, RouterOutlet} from 'angular2/router';
import Main from './main';
import Other from './other';


@Component({
    selector: 'hello-app'
})
@View({
    directives: [RouterLink, RouterOutlet],
    template: `<h1>Hello There</h1><router-outlet></router-outlet>`
})
@RouterConfig([
    {path:'/', redirectTo:'/main'},
    {path:'/main', as:'Main',component:Main},
    {path:'/other', as:'Other', component:Other}
])
export class HelloApp {
    name: string = 'World';
    count = 0;
    
    update(){
        this.count = this.count + 1;
    }
}

bootstrap(HelloApp);
