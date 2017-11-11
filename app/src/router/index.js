import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import homeComponent from '../components/home/homeComponent'
import datagridComponent from '../components/datagrid/datagridComponent.js'

export default (
    <div>
    <Route path="/" component={homeComponent} >
        <Route path="grid" component={datagridComponent} />
        <Route path="aaa" component={datagridComponent} />
    </Route>
        
    </div>
)