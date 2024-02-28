import '@aegisjsproject/aegis-md';

document.querySelectorAll('[data-readme]').forEach(btn => {
	btn.addEventListener('click', async ({ currentTarget }) => {
		try {
			document.querySelectorAll('[data-readme]').forEach(btn => btn.disabled = true);
			const { promise, resolve } = Promise.withResolvers();
			const HTMLAegisMDElement = await customElements.whenDefined('aegis-md');
			const dialog = document.createElement('dialog');
			const aegisMD = new HTMLAegisMDElement();
			const controller = new AbortController();

			dialog.addEventListener('close', ({ target }) => {
				target.remove();
				resolve();
				controller.abort();
			}, { signal: controller.signal });

			setTimeout(() => {
				document.body.addEventListener('click', ({ target }) => {
					if (! (target instanceof HTMLAegisMDElement)) {
						document.querySelector('dialog[open]').close();
					}
				}, { signal: controller.signal });
			}, 2000);

			dialog.append(aegisMD);
			document.body.append(dialog);
			dialog.showModal();
			aegisMD.src = currentTarget.dataset.readme;
			await promise;
		} catch(err) {
			console.error(err);
		} finally {
			document.querySelectorAll('[data-readme]').forEach(btn => btn.disabled = false);
		}
	});
});
