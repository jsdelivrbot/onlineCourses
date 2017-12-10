// Set up enviroment to run like browser in the command line
import jsdom from 'jsdom';
import jquery from 'jquery';
import chai, { expect } from 'chai';
import ReactDOM from 'react-dom';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import chaiJquery from 'chai-jquery';

import reducers from '../src/reducers';

// build renderComponent that render react class
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
const $ = jquery(global.window);

function renderComponent(ComponentClass, props, state) {
  console.log('props: ', props);
  console.log('state: ', state);
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );


  return $(ReactDOM.findDOMNode(componentInstance)); // produces html
}


// build helper for simulating event
$.fn.simulate = function (eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
}




// set up chai-jQuery
chaiJquery(chai, chai.util, $);

export {
  expect,
  renderComponent
}