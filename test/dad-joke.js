import { html, css, replace, appendTo, addStyles } from '@aegisjsproject/core';
import { gray } from '@aegisjsproject/styles/palette/bootstrap.js';
import { AegisComponent, SYMBOLS, TRIGGERS } from '@aegisjsproject/component';
import { updateIcon } from './icons.js';

class HTMLDataJokeElement extends AegisComponent {
	async [SYMBOLS.render](type, { shadow }) {
		switch(type) {
			case TRIGGERS.constructed:
				addStyles(shadow, css`:host {
					padding: 1.2rem;
					width: clamp(400px, 100%, 600px);
					border-radius: 14px;
					border: 1px solid ${gray[3]};
				}

				[part="joke"] {
					height: 4rem;
					overflow-y: auto;
				}

				::slotted(p) {
					margin: 0;
				}

				.icon {
					vertical-align: bottom;
					height: 1em;
					height: 1lh;
					width: auto;
				}

				.joke {
					font-family: system-ui;
					padding: 1.3rem;
					border-radius: 8px;
					border: 1px solid #cacaca;
				}`);

				appendTo(shadow, html`<div part="container">
					<div part="joke">
						<slot name="joke">Loading...</slot>
					</div>
					<button type="button" id="update-btn" class="btn btn-primary" part="btn">
						<span>Get new Dad Joke</span>
					</button>
				</div>`);

				// Cannot add listeners or `on*` attributes using `html`
				shadow.getElementById('update-btn').addEventListener('click', () => this.triggerUpdate('click'));

				// Also, for now, elements of a different namespace, such as `<svg>` are not supported
				shadow.getElementById('update-btn').append(updateIcon.cloneNode(true));

				break;

			case TRIGGERS.connected:
			case 'click':
				replace(this, html`<p slot="joke">${await HTMLDataJokeElement.getJoke()}</p>`);
				break;
		}
	}

	static async getJoke({ signal } = {}) {
		const resp = await fetch('https://icanhazdadjoke.com', {
			headers: { Accept: 'text/plain' },
			referrerPolicy: 'no-referrer',
			crossOrigin: 'anonymous',
			signal,
		});

		return await resp.text();
	}
}

HTMLDataJokeElement.register('dad-joke');
