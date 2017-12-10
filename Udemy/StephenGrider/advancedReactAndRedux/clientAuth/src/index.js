import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import App from './components/app';
import Header from './components/Header';
import Feature from './components/Feature';
import SignInPage00 from './components/auth/SignInPage00';
import SignOutPage from './components/auth/SignOutPage';
import SignUp from './components/auth/SignUp';
import AsyncValidationForm from './components/Async/AsyncValidationForm';
import RequireAuth from './components/auth/RequireAuth';

import { AUTH } from './actions/types';

import reducers from './reducers';

import reduxThunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

if (localStorage.getItem('token')) {
	store.dispatch({ type: AUTH });
}

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
        <Header />
				<Switch>
					<Route path="/feature" component={RequireAuth(Feature)} />   
					<Route path="/async" component={AsyncValidationForm} />   
					<Route path="/signup" component={SignUp} />   
					<Route path="/signout" component={SignOutPage} />   
					<Route path="/signin" component={SignInPage00} />   
					<Route path="/" component={App} />
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>,
	document.querySelector('.container')
);
