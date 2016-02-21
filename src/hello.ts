///<reference path="../typings/main.d.ts"/>
 
import 'reflect-metadata';
import 'angular2/bundles/angular2-polyfills'
import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';



@Component({
    selector: 'hello-app',
    template: `
        <h1>Hello There, {{name }} {{ count }} !</h1>
        <button (click)="update()"> Click It </button>
        Say hello to: <input [value]="name" (input)="name = $event.target.value">
    `
})
export class HelloApp {
    name: string = 'World';
    count = 0;
    
    update(){
        this.count = this.count + 1;
    }
}

bootstrap(HelloApp);
