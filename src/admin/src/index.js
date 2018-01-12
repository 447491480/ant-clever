import React from 'react';
import ReactDOM from 'react-dom';
import 'core-js/es6/map'
import 'core-js/es6/set'
import 'raf/polyfill'

import 'antd/lib/message';

import "../node_modules/video-react/dist/video-react.css";

import registerServiceWorker from './registerServiceWorker';

import App from './App';
import './index.css';

let root = document.getElementById('root');

ReactDOM.render(<App />, root);

console.log('process.env.NODE_ENV', process.env.NODE_ENV);

if (module.hot && process.env.NODE_ENV !== 'production') {
    module.hot.accept('./App', () => {
        ReactDOM.render(<App />, root);
    });
}

registerServiceWorker();
