import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import { HashRouter, Switch, Router, Route, hashHistory} from 'react-router'
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './components/app';
import Header from './components/Header';
import Resources from './components/Resources';
import RequireAuth from './components/RequireAuth';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/resources" component={RequireAuth(Resources)} />
          <Route path="/" component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  
  </Provider>
  , document.querySelector('.container'));
