// loader: enhance the ability of webpack
// babel is one of the most popular loader
// it has three parts babel-loader babel-core babel-preset-env


// const sum = require('./sum');

import sum from './sum';

const total = sum(1, 2);
console.log('total: ', total);
