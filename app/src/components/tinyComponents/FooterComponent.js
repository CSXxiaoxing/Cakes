import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Carousel} from 'antd';
import {Router, Route, Link, hashHistory,browserHistory, IndexRoute} from 'react-router';

import './sass/FooterComponent.scss';
class FooterComponent extends React.Component{
    render(){
        return (
            <div className="footer">
                <ul>
                    <li><Link to="/"><Icon type="home" /><span>首页</span></Link></li>
                    <li><Link to="/datagrid"><Icon type="appstore-o" /><span>分类</span></Link></li>
                    <li><Link to="/cart"><Icon type="shopping-cart" /><span>购物车</span></Link></li>
                    <li><Link onClick={this.filter}><Icon type="user"/><span>我</span></Link></li>
                </ul>
            </div>
        )
    }
    filter(){
        var cookies = document.cookie;
            if(cookies.length>0){
           
                cookies = cookies.split('; ');
                cookies.forEach(function(cookie){
                    var temp = cookie.split('=');
                    if(temp[0] == 'token'){
                         location.href = '/#/personal'
                    }
                }.bind(this))
            }else{
               
                 location.href = '/#/login'
            
            }
    }

}

export default FooterComponent