import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { logger } from 'redux-logger';

import allReducers from './reducers';
import App from './components/App.jsx';
import FormOne from './components/FormOne.jsx';
import OnePostDetail from './components/OnePostDetail.jsx';

const store = createStore(allReducers, applyMiddleware(thunk, promise));
// const store = createStore(allReducers, applyMiddleware(thunk, promise, logger));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/onePostDetail/:id" component={OnePostDetail} />
          <Route path="/form" component={FormOne} />
          <Route path="/" component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
