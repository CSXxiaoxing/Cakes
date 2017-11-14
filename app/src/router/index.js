import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import homeComponent from '../components/home/homeComponent'
import personalComponent from '../components/personal/personalComponent';
import registerComponent from '../components/register/registerComponent'
export default (
    <div>

        <Route path="/home" component={homeComponent}></Route>
        <Route path="/login" component={personalComponent}></Route>
        <Route path="/register" component={registerComponent}></Route>
    </div>
)