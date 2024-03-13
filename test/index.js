import { HTMLAegisMDElement } from '@aegisjsproject/aegis-md';
import { html } from '@aegisjsproject/core/parsers/html.js';
import { css } from '@aegisjsproject/core/parsers/css.js';
import { appendTo } from '@aegisjsproject/core/dom.js';
import { EVENTS } from '@aegisjsproject/core/events.js';
import { registerCallback } from '@aegisjsproject/core/callbackRegistry.js';
import xml from 'highlight.js/languages/xml.min.js';
import javascript from 'highlight.js/languages/javascript.min.js';
import cssLang from 'highlight.js/languages/css.min.js';

HTMLAegisMDElement.registerLanguages({ css: cssLang, xml, javascript });

customElements.whenDefined('aegis-md').then(() => {
	const closeHandler = ({ currentTarget, newState }) => {
		if (newState === 'closed') {
			currentTarget.remove();
		}
	};

	document.addEventListener('toggle', closeHandler);

	const showReadme = registerCallback('show-readme', async ({ currentTarget }) => {
		const popover = html`<aegis-md src="${currentTarget.dataset.readme}" popover="auto"></aegis-md>`.firstElementChild;

		document.body.append(popover);
		popover.addEventListener('toggle', closeHandler);
		popover.showPopover();
	});

	appendTo(document.getElementById('nav'), html`
		<button type="button" ${EVENTS.onClick}="${showReadme}" data-readme="https://unpkg.com/@aegisjsproject/core/README.md">
			<code>@aegisjsproject/core</code>
		</button>
		<button type="button" ${EVENTS.onClick}="${showReadme}" data-readme="https://unpkg.com/@aegisjsproject/styles/README.md">
			<code>@aegisjsproject/styles</code>
		</button>
		<button type="button" ${EVENTS.onClick}="${showReadme}" data-readme="https://unpkg.com/@aegisjsproject/component/README.md">
			<code>@aegisjsproject/component</code>
		</button>
		<button type="button" ${EVENTS.onClick}="${showReadme}" data-readme="https://unpkg.com/@aegisjsproject/markdown/README.md">
			<code>@aegisjsproject/markdown</code>
		</button>
		<button type="button" ${EVENTS.onClick}="${showReadme}" data-readme="../README.md">
			<code>@aegisjsproject/aegis-md</code>
		</button>
	`);

	document.adoptedStyleSheets = [css`[popover] {
		max-height: 95vh;
		max-width: 95%;
		overflow: auto;
	}`];
});
