import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// BrowserRouter for browsing routes
// Routes for Route
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reducers from './reducers';
import reduxPromise from 'redux-promise';
import reduxThunk from 'redux-thunk';

import PostIndex from './components/PostIndex';
import CreatePost from './components/CreatePost';
import NewPostRxForm from './components/NewPostRxForm';
import App from './components/App';
import PostShow from './components/PostShow';

import { fetchPosts } from './actions/index';

const createStoreWithMiddleware = applyMiddleware(reduxPromise, reduxThunk)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<div>
				<Switch>
					{/* <Route path="/oldPost" component={CreatePost} />   */}
					<Route path="/create/new" component={NewPostRxForm} /> 
					<Route path="/post/:id" component={PostShow} /> 
					<Route path="/" component={PostIndex} /> 
				 </Switch>
			</div>
		</BrowserRouter>
	</Provider>,
	document.querySelector('.container')
);
