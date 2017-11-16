import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';

import serviceComponent from '../components/service/serviceComponent';

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
        <Route path="/service" component={serviceComponent}></Route>
		<Route path="/cakeDatail" component={cakeDetailComponent}>
		</Route>
	</div>

)
