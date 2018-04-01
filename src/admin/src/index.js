import 'core-js/es6/map';
import 'core-js/es6/set';
import 'core-js/shim'
import 'raf/polyfill';

import 'es6-promise/auto';

import registerServiceWorker from './registerServiceWorker';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

// forEach polyfill
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (let i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

let root = document.getElementById('root');

ReactDOM.render(<App/>, root);

console.log('process.env.NODE_ENV', process.env.NODE_ENV);

if (module.hot && process.env.NODE_ENV !== 'production') {
    module.hot.accept('./App', () => {
        ReactDOM.render(<App/>, root);
    });
}

registerServiceWorker();
