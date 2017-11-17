import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';

import homeComponent from '../components/home/homeComponent'

//ljj
import loginComponent from '../components/login/loginComponent';
import registerComponent from '../components/register/registerComponent'
import personalComponent from '../components/personal/personalComponent'
// pyd
import cakeDetailComponent from '../components/cakeDetail/cakeDetailComponent'
import orderComponent from '../components/order/orderComponent';
// csx
import datagridComponent from '../components/datagrid/datagridComponent.js'
import cakeComponent from '../components/datagrid/cakeComponent.js'
// tzj
import contentComponent from '../components/home/contentComponent';
import cartComponent from '../components/cart/cartComponent';


export default (
        <div>
            <Route path="/t" component={homeComponent}>
                <Route path="/" component={contentComponent}></Route>
                <Route path="/datagrid" component={datagridComponent}>
                    <Route path="cc/:name" component={cakeComponent}></Route>
                </Route>
            </Route>
            <Route path="/cakeDatail/:id" component={cakeDetailComponent}>
            </Route>
            <Route path="/login" component={loginComponent}></Route>
            <Route path="/register" component={registerComponent}></Route>
            <Route path="/personal" component={personalComponent}>
            </Route>
            <Route path="/order" component={orderComponent}></Route>
            <Route path="/cart" component={cartComponent}></Route>
        </div>
)