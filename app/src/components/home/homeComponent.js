import React from 'react';
import {connect} from 'react-redux';

import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';

import SpinnerComponent from '../spinner/spinner';
import datagridComponent from '../datagrid/datagridComponent';
import * as homeAction from './homeAction';
import CarouselComponent from './carousel';
import { Layout, Menu, Breadcrumb, Icon, Carousel} from 'antd';
import './home.scss';

class homeComponent extends React.Component{
    componentDidMount(){
        this.props.Init();
    }

    render(){
        console.log(this.props.children)
        return (
            <div className="box">
                <div className="header">
                    <ul>
                        <li><Link to="/personal"><Icon type="environment" /></Link></li>
                        <li><Link><Icon type="star" /></Link></li>
                        <li><Link><Icon type="message" /></Link></li>
                    </ul>
                </div>
                <div className="content">
                    <img src="./src/img/cake3.jpg" />
                    <div className="classify">
                        <ul>
                            <li><Link to="/personal"><img src="./src/img/cake1.jpg" /><span>蛋糕</span></Link></li>
                            <li><Link><img src="./src/img/cake2.jpg" /><span>冰淇淋</span></Link></li>
                            <li><Link><img src="./src/img/cake3.jpg" /><span>小切块</span></Link></li>
                            <li><Link><img src="./src/img/cake4.jpg" /><span>定制</span></Link></li>
                        </ul>
                    </div>
                    <div className="billboard">
                        <h1>cake.榜单</h1>
                        <div><img src="./src/img/cake4.jpg" /></div>
                        <ul>
                            <li><Link to="/personal"><img src="./src/img/cake1.jpg" /><span>蛋糕</span></Link></li>
                            <li><Link><img src="./src/img/cake2.jpg" /><span>冰淇淋</span></Link></li>
                            <li><Link><img src="./src/img/cake3.jpg" /><span>小切块</span></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer">
                    <ul>
                        <li><Link to="/personal"><Icon type="home" /><span>首页</span></Link></li>
                        <li><Link to="/datagrid"><Icon type="appstore-o" /><span>分类</span></Link></li>
                        <li><Link><Icon type="home" /><span>购物车</span></Link></li>
                        <li><Link><Icon type="user"  /><span>我</span></Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = function(state){
    return {
        loading: state.home.loading,
        dataset: state.home.dataset || {}
    }
}

export default connect(mapStateToProps, homeAction)(homeComponent)