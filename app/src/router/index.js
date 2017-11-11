import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import homeComponent from '../components/home/homeComponent'

export default (
    <Route path="/home" component={homeComponent}></Route>
)