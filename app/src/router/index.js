import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import homeComponent from '../components/home/homeComponent';
import serviceComponent from '../components/service/serviceComponent';
export default (
    
    <div>
        <Route path="/" component={homeComponent}></Route>
        <Route path="/service" component={serviceComponent}></Route>
    </div>
)