import 'regenerator-runtime';
import 'normalize.css';
import '../styles/main.scss';
import App from './views/app';

const feather = require('feather-icons');

const app = new App({
	button: document.querySelector('#hamburgerButton'),
	drawer: document.querySelector('#navigationDrawer'),
	content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
	app.renderPage();
});

window.addEventListener('load', () => {
	app.renderPage();
	feather.replace();
});
