import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppEditor from './AppEditor';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppEditor />, document.getElementById('root'));
registerServiceWorker();
