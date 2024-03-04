import { AegisComponent } from '@aegisjsproject/component/base.js';
import { SYMBOLS, TRIGGERS } from '@aegisjsproject/component/consts.js';
import { getURL, setURL } from '@aegisjsproject/component/attrs.js';
import { html } from '@aegisjsproject/core/parsers/html.js';
import { md, getMarkdown, createStyleSheet } from '@aegisjsproject/markdown/markdown.js';

const template = html`
	<div id="content" part="content"></div>
	<slot name="markdown" hidden=""></slot>
`;

template.prepend(
	createStyleSheet('github', { media: '(prefers-color-scheme: light)' }),
	createStyleSheet('github-dark', { media: '(prefers-color-scheme: dark)' }),
);

class HTMLAegisMDElement extends AegisComponent {
	constructor() {
		super({ template });
	}

	async [SYMBOLS.render](type, { shadow, name, assigned, newValue }) {
		switch(type) {
			case TRIGGERS.slotChanged:
				if (name === 'markdown' && assigned.length !== 0) {
					shadow.getElementById('content')
						.replaceChildren(md`${assigned.map(el => el.textContent).join('\n')}`);
				}
				break;

			case TRIGGERS.attributeChanged:
				if (name === 'src' && typeof newValue === 'string' && newValue.length !== 0) {
					this.replaceChildren();
					const parsed = await getMarkdown(this.src);
					shadow.getElementById('content').replaceChildren(parsed);
				}
				break;
		}
	}

	get src() {
		return getURL(this, 'src');
	}

	set src(val) {
		setURL(this, 'src', val);
	}

	static get observedAttributes() {
		return [...AegisComponent.observedAttributes, 'src'];
	}
}

HTMLAegisMDElement.register('aegis-md');
