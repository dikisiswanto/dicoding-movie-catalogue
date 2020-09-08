import runtime from 'serviceworker-webpack-plugin/lib/runtime';

const swRegister = async () => {
	if ('serviceWorker' in navigator) {
		await runtime.register();
		return;
	}

	// eslint-disable-next-line no-console
	console.log('service worker not supported in this browser');
};

export default swRegister;