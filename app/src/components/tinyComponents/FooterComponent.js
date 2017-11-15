import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Carousel} from 'antd';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
class FooterComponent extends React.Component{
    render(){
        return (
            <div className="footer">
                <ul>
                    <li><Link to="/"><Icon type="home" /><span>首页</span></Link></li>
                    <li><Link to="/datagrid"><Icon type="appstore-o" /><span>分类</span></Link></li>
                    <li><Link><Icon type="shopping-cart" /><span>购物车</span></Link></li>
                    <li><Link to="login"><Icon type="user"  /><span>我</span></Link></li>
                </ul>
            </div>
        )
    }
}

export default FooterComponent