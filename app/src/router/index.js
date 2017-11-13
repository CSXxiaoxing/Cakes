import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import homeComponent from '../components/home/homeComponent';
import contentComponent from '../components/home/contentComponent';
import personalComponent from '../components/personal/personalComponent';

export default (
        <Route path="/t" component={homeComponent}>
            <Route path="/" component={contentComponent}></Route>
            <Route path="/personal" component={personalComponent}></Route>
        </Route>
        
)