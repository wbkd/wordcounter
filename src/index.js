import React from 'react';
import { render } from 'react-dom';
import App from './modules/App';
import initStyle from './initStyle';

initStyle();

render(<App />, document.getElementById('root'));
