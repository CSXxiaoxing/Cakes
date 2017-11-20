import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Carousel} from 'antd';
import {Router, Route, Link, hashHistory,browserHistory, IndexRoute} from 'react-router';

import './sass/FooterComponent.scss';
var FooterLogin = '';
var cookies = document.cookie;
class FooterComponent extends React.Component{
    componentDidMount(){

        if(cookies.length>0){
            // console.log(cookies.split('; '))
            if(!cookies.split){
                return false;
            }
            
            cookies = cookies.split('; ');
            FooterLogin = '/login';
            cookies.forEach(function(cookie){
                var temp = cookie.split('=');
                if(temp[0] == 'token'){
                     FooterLogin = '/personal';
                }
            }.bind(this));
        } else {
             FooterLogin = '/login';
        }
    }
    render(){
        return (
            <div className="footer">
                <ul>
                    <li><Link to="/"><Icon type="home" /><span>首页</span></Link></li>
                    <li><Link to="/datagrid"><Icon type="appstore-o" /><span>分类</span></Link></li>
                    <li><Link to="/cart"><Icon type="shopping-cart" /><span>购物车</span></Link></li>
                    <li><Link to={FooterLogin}><Icon type="user"/><span>我</span></Link></li>

                </ul>
            </div>
        )
    }

}

export default FooterComponent