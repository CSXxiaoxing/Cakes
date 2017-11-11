import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import DatagridComponent from '../components/datagrid/DatagridComponent'
import HomeComponent from '../components/home/HomeComponent'

export default (
        <Route path="/" components={HomeComponent}>
        	<Route path="student" component={DatagridComponent}></Route>
        </Route>
)