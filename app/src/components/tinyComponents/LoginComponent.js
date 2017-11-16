import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Carousel} from 'antd';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import './sass/LoginComponent.scss';
class LoginComponent extends React.Component{
    render(){
        return (
            <div className="header">
                <ul>
                    <li><Link to="/"><Icon type="left" /></Link></li>
                    <li><Link><Icon type="star" /></Link></li>
                    <li><Link><Icon type="message" /><i>10</i></Link></li>
                </ul>
            </div>
                 
        )
    }
}
export default LoginComponent