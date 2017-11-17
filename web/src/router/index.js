import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import DatagridComponent from '../components/datagrid/DatagridComponent'
import DataFormComponent from '../components/dataform/DataFormComponent'
import HomeComponent from '../components/home/HomeComponent'
// csx
import LoginComponent from '../components/login/LoginComponent.js'
export default (
        <Route>
        <Route path="/" components={HomeComponent}>
        	<Route path="/goods_list" component={DatagridComponent}></Route>
        	<Route path="/goods_edit" component={DataFormComponent}></Route>
        	<Route path="/goods_add" component={DataFormComponent}></Route>
        	<Route path="/class_list" component={DatagridComponent}></Route>
        	<Route path="/class_edit" component={DataFormComponent}></Route>
        	<Route path="/class_add" component={DataFormComponent}></Route>
        	<Route path="/admin_list" component={DatagridComponent}></Route>
        	<Route path="/admin_edit" component={DataFormComponent}></Route>
                <Route path="/admin_add" component={DataFormComponent}></Route>
        </Route>
	<Route path="/Login" component={LoginComponent}></Route>
        </Route>
)