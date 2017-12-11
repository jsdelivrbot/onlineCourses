// loader: enhance the ability of webpack
// babel is one of the most popular loader
// it has three parts babel-loader babel-core babel-preset-env

// style loader and css loader

// loader = thing to do inside of bundle.js
// plugin = want to do something outside of bundle.js

// const sum = require('./sum');



const button = document.createElement('button');
button.innerText = 'CLICK!!!'
button.onclick = () => {
  // System.import is responsible for code splitting
  System.import('./image_viewer.js')
    .then((module) => {
      // console.log('module: ', module);
      module.default();
    });
}

document.body.appendChild(button);