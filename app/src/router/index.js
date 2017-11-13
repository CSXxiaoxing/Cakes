import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import homeComponent from '../components/home/homeComponent'
import personalComponent from '../components/personal/personalComponent'

export default (
        <Route path="/" component={homeComponent}>
            <Route path="/personal" component={personalComponent}></Route>
        </Route>
        
    
)