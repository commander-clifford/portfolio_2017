import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
		<h1>Hello {{name}}</h1>
		<my-resume></my-resume>
	`,
})

export class AppComponent  {
	name = 'Clifford Ryan Nelson';

}
