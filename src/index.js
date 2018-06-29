import { h, render } from 'preact';
import App from './modules/App';
import initStyle from './initStyle';

initStyle();

render(<App />, document.getElementById('root'));
