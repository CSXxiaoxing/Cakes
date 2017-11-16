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
                <FooterComponent/>
            </div>
        )
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