import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyInfo from './myinfo/MyInfo';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<MyInfo />, document.getElementById('root'));
serviceWorker.unregister();
