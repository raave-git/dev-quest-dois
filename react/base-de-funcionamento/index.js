const { createElement } = React;

const app_div = document.getElementById('app');
const root = ReactDOM.createRoot(app_div);

const h1 = createElement('h1', {}, 'Olá, Mundo Synth');
const p = createElement('p', {}, 'Estamos usando React pela primeira vez.');
const main = createElement('main', {}, h1, p)

root.render(main);
