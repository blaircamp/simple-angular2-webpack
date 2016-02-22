import { Component, View} from 'angular2/core';

@Component({
	selector: 'other',
})
@View({
	template: `<h1>Other Component</h1>`
})
export class OtherComponent {
	name = 'john';
	message = '';

	sayHello() {
		this.message = 'Hello ' + this.name + '!';
	}
}