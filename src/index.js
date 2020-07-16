import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import Register from './components/Auth/Register';
import login from './components/Auth/Login';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Router } from 'react-router-dom';

const Root = () => (
	<BrowserRouter>
		<Switch>
			<Router path="/login" component={login} />
			<Router path="/register" component={Register} />
			<Router path="/" component={App} />
		</Switch>
	</BrowserRouter>
);
ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
