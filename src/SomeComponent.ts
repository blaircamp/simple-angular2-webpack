import { Component,View} from 'angular2/core';

@Component({
	selector: 'some',
})
@View({
	template:`<h1>Some Component</h1>`
})
export class SomeComponent {
	name = 'john';
	message = '';

	sayHello() {
		this.message = 'Hello ' + this.name + '!';
	}
}