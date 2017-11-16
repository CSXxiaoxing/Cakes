import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configStore from './redux/configStore';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import router from './router/index';
import $ from './libs/jquery-3.2.1';
const store = configStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory} routes={router}/>
    </Provider>,
    document.getElementById('app')
)
