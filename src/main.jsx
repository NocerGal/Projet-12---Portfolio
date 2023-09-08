import { render } from 'preact';
import { App } from './app.jsx';

import normalize from './style/normalize.css';
import style from './style/style.css';

render(<App />, document.getElementById('app'));
