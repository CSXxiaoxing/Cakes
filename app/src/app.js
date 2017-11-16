import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configStore from './redux/configStore';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import router from './router/index';
<<<<<<< HEAD
import $ from './libs/jquery-3.2.1';
=======
import $ from 'jquery';

>>>>>>> a5b2e9379f56a1c01d8a83cdafe55e6f47b2135f
const store = configStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory} routes={router}/>
    </Provider>,
    document.getElementById('app')
)
