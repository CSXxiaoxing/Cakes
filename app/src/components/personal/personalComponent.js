import React from 'react';

import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import {connect} from 'react-redux';

import {Icon} from 'antd';
import LoginComponent from '../tinyComponents/LoginComponent.js';


import './personal.scss'
import * as personalAction from './personalAction'

class personalComponent extends React.Component{
    componentDidMount(){
        var cookies = document.cookie;
            if(cookies.length>0){
                cookies = cookies.split('; ');
                cookies.forEach(function(cookie){
                    var temp = cookie.split('=');
                    if(temp[0] === 'token'){
                        console.log(temp[1])
                        const sql = `select * from user_list where token = '${temp[1]}'`
                        this.props.init('http://localhost:888/Datagrid.php',sql).then(res=>{
                        console.log(res[0])
                        $('.phone').text(res[0][0].username)
                        })
                    }
                }.bind(this))
            }
    }
    render(){
        return (
            <div className="box">
                <div className="l-head">
                </div>
                <div className="l-content">
                    <div className="l-info">
                        <Icon type="apple" className='apple' />
                        <span className="phone"></span>
                        <Icon type="qrcode" className='qrcode' />
                    </div>
                    <div className="other">
                        <div className="youhui">
                            <span className='heavy'>0张</span>
                            <span>优惠券</span>
                        </div>
                          <div className="yue">
                            <span className='heavy'>0.00</span>
                            <span>余额</span>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="order">
                        <ul>
                            <li><Link to = "/order"><Icon type="check-squa"/>我的订单</Link></li>
                            <li><Icon type="check-squa"/>地址管理</li>
                            <li><Icon type="check-squa"/>优惠券</li>
                            <li><Icon type="check-squa"/>余额充值</li>
                            <li><Icon type="check-squa"/>21客会</li>
                        </ul>
                    </div>
                    <div className="line"></div>
                    <div className="order type">
                    <ul>
                        <li>用户反馈</li>
                        <li>用户协议</li>
                        <li>版本</li>
                        <li>关于</li>
                    </ul>
                    </div>
                    <div className="line"></div>
                    <div className="tel">
                        <ul>
                            <li>客服电话 400 650 2121</li>
                            <li><Icon type="phone" className="Phone"/></li>
                        </ul>
                    </div>
                    <div className="bigline"></div>
                </div>
                <div className="l-footer"> </div>
            </div>
        )
    }
}

const mapStateToProps = function(state){
    return {
        data: state.personal.dataset || {}
    }
}

export default connect(mapStateToProps, personalAction)(personalComponent)