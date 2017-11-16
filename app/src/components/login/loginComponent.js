import React from 'react';

import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router'

import './login.scss'
import * as loginAction from './loginAction'
import LoginComponent from '../tinyComponents/LoginComponent'

class loginComponent extends React.Component{
   
    // // [[{"username":"13420173024","password":"ljj111111","id":"1832"}]]
    // componentWillReceiveProps(nextProps){
    //     var username = $('.username').val()
    //     var password = $('.password').val()
   
    //     // console.log(JSON.parse(nextProps.data))
    //     if($.isEmptyObject(nextProps.data) == 'false'){
    //         // console.log(66)
    //         if(JSON.parse(nextProps.data)[0].length == '0'){
    //             // alert('该帐户尚未注册')
    //             $('.l-cover').show()
    //             $('.l-massage').show()
    //             $('.massage').text('该帐户尚未注册')
    //         }else{
    //             if(JSON.parse(nextProps.data)[0][0].password != password){
    //             $('.l-cover').show()
    //             $('.l-massage').show()
    //             $('.massage').text('密码输入错误')
    //             }else{
    //                 alert('登录成功')
    //             }
    //         }
    //     }
    // }
    componentDidMount(){
        this.props.clear();
    }
    render(){
        return (
            <div className="box">
                <div className="head">
                   < LoginComponent/>
                </div>
                <div className="content">
                    <div className="l-router clearfix">
                    <Link to="/login" onClick={this.active} className='l-active'>账号密码登录</Link>
                    <Link to="/register">注册</Link>
                    </div>
                    <div className='l-loginbox'>
                        <input type="text"placeholder="用户名/邮箱地址" className="username"/>
                        <input type="password" placeholder="填写密码"  className="password"/>
                        <button onClick={this.find.bind(this)}>登录</button>
                    </div>
                    <div className="l-remember">
                        <label ><input type="checkbox"/>记住账号</label>
                      
                    </div>
                </div>
                <div className="l-cover">

                </div>
                <div className="l-massage">
                    <p className='massage'>该账号尚未注册</p>
                    <button onClick={this.hide}>确定</button>
                </div>
            </div>
        )
    }
    hide(){
        $('.l-cover').hide();
        $('.l-massage').hide();
    }
    find(){

        var username = $('.username').val()
        var password = $('.password').val()
        console.log(password)
        const sql = ` select * from user_list where username = '${username}'`
        this.props.Find('http://localhost:888/Datagrid.php',sql).then(res=>{
            console.log(res[0])
            if(res[0].length == '0'){
                $('.l-cover').show()
                $('.l-massage').show()
                $('.massage').text('该帐户尚未注册')
            }else{
                if(res[0][0].password != password){
                    $('.l-cover').show()
                    $('.l-massage').show()
                    $('.massage').text('密码输入错误')
                }else{
                    this.props.Token('http://localhost:888/token.php',{username,password}).then(res=>{
                        console.log(res[0])
                        // $.cookie('cookieName', 'cookieValue', { expires: 7 })
                        document.cookie = 'token ='+res[0]
                         alert('登录成功')
                        browserHistory.push('/#/personal')
                        location.reload() 
                    })
                }
            }
        })
    }

}
const mapStateToProps = function(state){
    return {
        data: state.login.dataset || {}
    }
}

export default connect(mapStateToProps, loginAction)(loginComponent)