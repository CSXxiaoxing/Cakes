import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import homeComponent from '../components/home/homeComponent'
import personalComponent from '../components/personal/personalComponent'

export default (
    <div>
        <Route path="/" component={homeComponent}></Route>
        <Route path="/personal" component={personalComponent}></Route>
    </div>
    
)