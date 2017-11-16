import React from 'react';
import {connect} from 'react-redux';

import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';

import SpinnerComponent from '../spinner/spinner';
import datagridComponent from '../datagrid/datagridComponent';
import * as homeAction from './homeAction';
import CarouselComponent from '../carousel/carousel';
import contentComponent from './contentComponent';
import $ from '../../libs/jquery-3.2.1';
import { Layout, Menu, Breadcrumb, Icon, Carousel} from 'antd';
import './home.scss';

class homeComponent extends React.Component{
    componentDidMount(){
        $('.footer ul li').eq(0).addClass('iconActive');
        $('.footer ul li').click(function(){
            $(this).addClass('iconActive').siblings().removeClass('iconActive');
        });
        // 城市定位？
        var url = 'http://chaxun.1616.net/s.php?type=ip&output=json&callback=?&_=' + Math.random();
            $.getJSON(url, function(data) {
                var city = data.Isp.slice(3, -4);
                $('.city').text(`${city}`)
            });
        $('.header ul li').eq(0).click(function(){
            var text;

            $('.cover').css({display:'block'});
            $('.list li').click(function(){
                $(this).addClass('coverActive').siblings().removeClass('coverActive');
                text = $(this).children().eq(1).text();
            })
            $('.cover .btn').click(function(){
                $('.cover').css({display:'none'});
                $('.header ul li span').text(text);
            })
        });
    }

    render(){
        console.log(this.props.children)
        return (
            <div className="box">
                <div className="cover">
                    <div className="citylist">
                        <div className="headline">
                            <h3>选择城市</h3>
                        </div>
                        <ul className="list">
                            <li><span>√</span><span>上海</span></li>
                            <li><span>√</span><span>北京</span></li>
                            <li><span>√</span><span>天津</span></li>
                            <li><span>√</span><span>杭州</span></li>
                            <li><span>√</span><span>苏州</span></li>
                            <li><span>√</span><span>广州</span></li>
                            <li><span>√</span><span>深圳</span></li>
                            <li><span>√</span><span>南宁</span></li>
                        </ul>
                        <div className="hint">*切换城市将清空购物车</div>
                        <div className="btn">
                            <button>确定</button>
                        </div>
                    </div>
                </div>
                <div className="header">
                    <ul>
                    <li><Link><Icon type="environment" /><span className="city">广州</span></Link></li>
                        <li><Link><Icon type="star" /></Link></li>
                        <li><Link><Icon type="message" /><i>10</i></Link></li>
                    </ul>
                </div>
                <div className="content">
                    <div>{this.props.children}</div>
                </div>
                <div className="footer">
                    <ul>
                        <li><Link to="/"><Icon type="home" /><span>首页</span></Link></li>
                        <li><Link to="/datagrid"><Icon type="appstore-o" /><span>分类</span></Link></li>
                        <li><Link><Icon type="shopping-cart" /><span>购物车</span></Link></li>
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