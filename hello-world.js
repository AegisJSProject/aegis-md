import { AegisComponent, SYMBOLS, TRIGGERS } from '@aegisjsproject/component';
import { html, appendTo } from '@aegisjsproject/core';

class HTMLHelloWorldElement extends AegisComponent {
	async [SYMBOLS.render](type, { shadow }) {
		switch(type) {
			case TRIGGERS.constructed:
				appendTo(shadow, html`<h1>Hello, World!</h1>`);
				break;
		}
	}
}

HTMLHelloWorldElement.register('hello-world');
