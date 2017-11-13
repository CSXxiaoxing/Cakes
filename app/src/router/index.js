import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import homeComponent from '../components/home/homeComponent'
import cakeDetailComponent from '../components/cakeDetail/cakeDetailComponent'

export default (
	<div>	
	    <Route path="/home" component={homeComponent}></Route>
	    <Route path="/cakeDatail" component={cakeDetailComponent}></Route>
	</div>
)