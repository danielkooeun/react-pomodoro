import React from 'react';
import ReactDOM from 'react-dom';
import Router from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
