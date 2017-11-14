import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
<<<<<<< HEAD
import homeComponent from '../components/home/homeComponent';
import serviceComponent from '../components/service/serviceComponent';
export default (
    
    <div>
        <Route path="/" component={homeComponent}></Route>
        <Route path="/service" component={serviceComponent}></Route>
    </div>
)
=======

import homeComponent from '../components/home/homeComponent'
// pyd
import cakeDetailComponent from '../components/cakeDetail/cakeDetailComponent'
// csx
import datagridComponent from '../components/datagrid/datagridComponent.js'
import cakeComponent from '../components/datagrid/cakeComponent.js'
// tzj
import personalComponent from '../components/personal/personalComponent';
import contentComponent from '../components/home/contentComponent';

export default (
	<div>
	    <Route path="/t" component={homeComponent}>
            <Route path="/" component={contentComponent}></Route>
            <Route path="/personal" component={personalComponent}></Route>
            <Route path="/datagrid" component={datagridComponent}>
                <Route path="cc/:name" component={cakeComponent}></Route>
            </Route>            
        </Route>
		<Route path="/cakeDatail" component={cakeDetailComponent}>
		</Route>
	</div>

)
>>>>>>> d1e6795c769551ad68638c70de98ba7ad1ca6e03
