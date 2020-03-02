import React from 'react';
import ReactDOM from 'react-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './index.css';
import reducers from '../redux';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

export const store = createStore(reducers);




if (module.hot) {
    module.hot.accept();
}


import HeaderComponent from './component/header' ;
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Provider store={store}  > <App /> </Provider> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
