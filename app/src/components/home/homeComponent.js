import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';

import SpinnerComponent from '../spinner/spinner';
import * as homeAction from './homeAction';
import CarouselComponent from '../carousel/carousel';
import contentComponent from './contentComponent';
import CoverComponent from '../tinyComponents/CoverComponent';
import HeaderComponent from '../tinyComponents/HeaderComponent';
import FooterComponent from '../tinyComponents/FooterComponent';
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
                <CoverComponent/>
                <HeaderComponent/>
                <div className="content">
                    <div>{this.props.children}</div>
                </div>
                <div className="footer">
                    <ul>
                        <li><Link to="/"><Icon type="home" /><span>首页</span></Link></li>
                        <li><Link to="/personal"><Icon type="appstore-o" /><span>分类</span></Link></li>
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