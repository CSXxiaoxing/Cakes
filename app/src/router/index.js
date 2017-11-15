import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';

import homeComponent from '../components/home/homeComponent'

//ljj
import personalComponent from '../components/personal/personalComponent';
import registerComponent from '../components/register/registerComponent'

// pyd
import cakeDetailComponent from '../components/cakeDetail/cakeDetailComponent'
// csx
// import datagridComponent from '../components/datagrid/datagridComponent.js'
// import cakeComponent from '../components/datagrid/cakeComponent.js'
// tzj
import contentComponent from '../components/home/contentComponent';
import cartComponent from '../components/cart/cartComponent';


export default (
	<div>
	    <Route path="/t" component={homeComponent}>
            <Route path="/" component={contentComponent}></Route>
        </Route>
		<Route path="/cakeDatail/:id" component={cakeDetailComponent}>
		</Route>
        <Route path="/login" component={personalComponent}></Route>
        <Route path="/register" component={registerComponent}></Route>
        <Route path="/cart" component={cartComponent}></Route>
	</div>

)

