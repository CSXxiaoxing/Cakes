import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute, IndexRedirect} from 'react-router';
import DatagridComponent from '../components/datagrid/DatagridComponent'
import DataFormComponent from '../components/dataform/DataFormComponent'
import UploadComponent from '../components/upload/UploadComponent'
import HomeComponent from '../components/home/HomeComponent'
import LoginComponent from '../components/login/LoginComponent.js'
export default (
        <Route>
                <Route path="/" components={HomeComponent}>
                        <IndexRedirect to="/goods_list" />
                	<Route path="/goods_list" component={DatagridComponent}></Route>
                	<Route path="/goods_edit" component={DataFormComponent}></Route>
                	<Route path="/goods_add" component={DataFormComponent}></Route>
                	<Route path="/class_list" component={DatagridComponent}></Route>
                	<Route path="/class_edit" component={DataFormComponent}></Route>
                	<Route path="/class_add" component={DataFormComponent}></Route>
                	<Route path="/admin_list" component={DatagridComponent}></Route>
                	<Route path="/admin_edit" component={DataFormComponent}></Route>
                        <Route path="/admin_add" component={DataFormComponent}></Route>
                        <Route path="/user_list" component={DatagridComponent}></Route>
                        <Route path="/user_edit" component={DataFormComponent}></Route>
                        <Route path="/user_add" component={DataFormComponent}></Route>
                        <Route path="/order_list" component={DatagridComponent}></Route>
                        <Route path="/order_detalis" component={DatagridComponent}></Route>
                        <Route path="/order_edit" component={DataFormComponent}></Route>
                </Route>
                <Route path="/login" component={LoginComponent}></Route>
        </Route>
)