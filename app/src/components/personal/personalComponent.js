import React from 'react';

import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import {connect} from 'react-redux';
import LoginComponent from '../tinyComponents/LoginComponent.js';

import './personal.scss'
import personalAction from './personalAction.js'


class personalComponent extends React.Component{
    render(){
        return (
            <div className="box">
                <div className="head"><LoginComponent/></div>
                <div className="content">
                    <div className="l-router clearfix">
                    <Link to="/login" onClick={this.active} className='l-active'>账号密码登录</Link>
                    <Link to="/register">注册</Link>
                    </div>
                    <div className='l-loginbox'>
                        <input type="text"placeholder="用户名/邮箱地址"/>
                        <input type="password" placeholder="填写密码"/>
                        <button>登录</button>
                    </div>
                    <div className="l-remember">
                        <label ><input type="checkbox"/>记住账号</label>
                      
                    </div>
                </div>
                <div className="footer">
                </div>
            </div>
        )
    }
    active(e){
        console.log($(e.target))
        $(e.target).addClass('l-acitve').siblings().removeClass('l-active')
    }
    find(e){
    	
    }
}
const mapStateToProps = function(state){
    return {
        loading: state.student.loading,
        dataset: state.student.dataset || {}
    }
}


export default personalComponent
