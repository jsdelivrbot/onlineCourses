// loader: enhance the ability of webpack
// babel is one of the most popular loader
// it has three parts babel-loader babel-core babel-preset-env

// style loader and css loader

// loader = thing to do inside of bundle.js
// plugin = want to do something outside of bundle.js

// const sum = require('./sum');


import sum from './sum';
import './image_viewer';

const total = sum(1, 2);
console.log('total: ', total);
