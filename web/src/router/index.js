import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import DatagridComponent from '../components/datagrid/DatagridComponent'
import DataFormComponent from '../components/dataform/DataFormComponent'
import UploadComponent from '../components/upload/UploadComponent'
import HomeComponent from '../components/home/HomeComponent'
export default (
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
        	<Route path="/upload" component={UploadComponent}></Route>
        </Route>
)