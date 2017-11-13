import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import homeComponent from '../components/home/homeComponent'

import datagridComponent from '../components/datagrid/datagridComponent.js'
import cakeComponent from '../components/datagrid/cakeComponent.js'

import personalComponent from '../components/personal/personalComponent'

export default (
    <div>
        <Route path="/" component={homeComponent}>
            <Route path="/personal" component={personalComponent}></Route>
        </Route>
        <Route path="/datagrid" component={datagridComponent}>
            <Route path="cc/:name" component={cakeComponent}></Route>
        </Route>
    </div>
)