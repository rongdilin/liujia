import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import 'antd/dist/antd.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from "react-router-dom";

// for future history use
// const history = createBrowserHistory();

ReactDOM.render((
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
