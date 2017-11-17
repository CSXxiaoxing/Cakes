import React from 'react';

import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import {connect} from 'react-redux';
import {Icon} from 'antd';

import './address.scss'
import * as addressAction from './addressAction'
import FooterComponent from '../tinyComponents/FooterComponent'

class addressComponent extends React.Component{
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
           <h1>adress</h1>
        )
    }
    quit(){
        $('.l-cover').show()
        $('.l-massage').show()
        $('.massage').text('确定要退出登录吗')

    }
    cancel(){
        $('.l-cover').hide()
        $('.l-massage').hide()
    }
    confirm(){
        $('.l-cover').hide();
        $('.l-massage').hide();
         var cookies = document.cookie;
        if(cookies.length>0){
            cookies = cookies.split('; ');
            cookies.forEach(function(cookie){
                var temp = cookie.split('=');
                if(temp[0] === 'token'){
                    console.log(temp[1])
                    const sql = `select * from user_list where token = '${temp[1]}'`
                    this.props.Get('http://localhost:888/Datagrid.php',sql).then(res=>{
                    console.log(res[0][0].token)
                    // var date=new Date();
                    // date.setTime(date.getTime()-30*60*1000); 
                    // document.cookie="token="+res[0][0].token+"expires="+date.toGMTString();
                    var date = new Date();
                    date.setDate(date.getDate()-7);
                    document.cookie = "token="+res[0][0].token+";expires="+date.toString();
                     location.href = '/#/login'
                    })
                }
            }.bind(this))
        }
    }

}
const mapStateToProps = function(state){
    return {
        // data: state.address.dataset || {}
    }
}

export default connect(mapStateToProps, addressAction)(addressComponent)