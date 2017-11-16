import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';

import SpinnerComponent from '../spinner/spinner';
import * as homeAction from './homeAction';
import contentComponent from './contentComponent';
import CoverComponent from '../tinyComponents/CoverComponent';
import HeaderComponent from '../tinyComponents/HeaderComponent';
import FooterComponent from '../tinyComponents/FooterComponent';
import { Layout, Menu, Breadcrumb, Icon, Carousel} from 'antd';
import { browserHistory } from 'react-router';
import './home.scss';

class homeComponent extends React.Component{
    componentDidMount(){
        this.props.Init();
        $('.footer ul li').eq(0).addClass('iconActive');
        $('.footer ul li').click(function(){
            $(this).addClass('iconActive').siblings().removeClass('iconActive');
        });
        // 城市定位？
        var url = 'http://chaxun.1616.net/s.php?type=ip&output=json&callback=?&_=' + Math.random();
            $.getJSON(url, function(data) {
                var city = data.Isp.slice(3,-11);
                $('.city').text(`${city}`)
            });
        $('.header ul li').eq(0).click(function(){
            var text;
            $('.cover').show();
            $('.list li').click(function(){
                $(this).addClass('coverActive').siblings().removeClass('coverActive');
                text = $(this).children().eq(1).text();
            })
            $('.cover .btn').click(function(){
                $('.cover').hide();
                $('.header ul li span').text(text);
            })
        });
    }

    render(){
        return (
            <div className="box">
                <CoverComponent/>
                <HeaderComponent/>
                <div className="content">
                    <div>{this.props.children}</div>
                </div>

                <div className="footer">
                    <ul>
                        <li><Link to="/"><Icon type="home" /><span>首页</span></Link></li>
                        <li><Link to="/datagrid"><Icon type="appstore-o" /><span>分类</span></Link></li>
                        <li><Link><Icon type="shopping-cart" /><span>购物车</span></Link></li>
                        <li ><Link onClick={this.filter}><Icon type="user"/><span>我</span></Link></li>
                    </ul>
                </div>

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
                                browserHistory.push('/#/personal')
                                location.reload() 
                    }
                }.bind(this))
            }else{
                console.log(666)
                browserHistory.push('/#/login')
                location.reload() 
            }
    }
}

const mapStateToProps = function(state){
    var dataset  = state.home.dataset || '[]';
    return {
        loading: state.home.loading,
        dataset: dataset[0] || []
    }
}

export default connect(mapStateToProps, homeAction)(homeComponent)