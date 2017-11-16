import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import {connect} from 'react-redux';

import './register.scss'
import * as registerAction from './registerAction.js'
class registerComponent extends React.Component{
    // componentWillReceiveProps(nextProps){
    //     console.log(nextProps.dataset);
    //     if(nextProps.dataset != {}){
    //         if(JSON.parse(nextProps.dataset)[0].length > 0){
    //             alert('该帐户已经存在')
    //         }else{
    //             this.register()
    //             alert('注册成功')
    //         }
    //     }
    // }
    componentDidMount(){
        this.props.Clear();
        console.log(this.props.dataset)
        var arr = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('');
        // 循环获取验证码
        var res = '';
        for(var i=0;i<4;i++){
            var idx = parseInt(Math.random()*arr.length);
            res += arr[idx];
        }
        $('.code').text(res)
    }
    render(){
        return (
            <div className="box">

                <div className="head">head</div>
                <div className="content">
                       <div className="l-router clearfix">
                    <Link to="/login" >账号密码登录</Link>
                    <Link to="/register" className='l-active'>注册</Link>
                    </div>
                    <div className='l-loginbox'>
                        <label><input type="text" placeholder="输入手机号码" className="username" onBlur={this.judge}/><i className='yes'><img src="src/components/register/img/pass.png"/></i></label>
                        <label><input type="password" className="password" onBlur={this.judge} placeholder="密码：8~20字符,需同时包含英文和字母"/><i className='yes'><img src="src/components/register/img/pass.png"/></i></label>
                        <label><input type="password"  className="repeatpsw"onBlur={this.judge} placeholder="确认密码"/><i className='yes'><img src="src/components/register/img/pass.png"/></i></label>
                        <label><input type="text" onBlur={this.judge}  placeholder="输入验证码" className="incode"/><span className="code"></span></label>
                        <span className='errmsg'></span>
                        <button onClick={this.select.bind(this)}>注册</button>
                    </div>
                    <div className="l-remember">
                        <laber><input type="checkbox"/>已阅读并同意</laber>
                    </div>
                </div>
                <div className="footer">
                    <Link to="/personal">personal</Link>
                    <Link to="/home">home</Link>
                </div>
                <div className="l-cover">

                </div>
                <div className="l-massage">
                    <p>21Cake提醒您</p>
                    <p className='massage'>该账号尚未注册</p>
                    <button onClick={this.hide}>确定</button>
                </div>
            </div>
        )
    }
    select(){
        var username = $('.username').val()
        const sql = ` select * from user_list where username = '${username}'`
        this.props.Select('http://localhost:888/Datagrid.php',sql).then(res=>{
            if(res[0].length > 0){
                    // alert('该帐户已经存在')
                $('.l-cover').show()
                $('.l-massage').show()
                $('.massage').text('该帐户已经存在')
            }else{
                this.register()
                // alert('注册成功')
                $('.l-cover').show()
                $('.l-massage').show()
                $('.massage').text('注册成功')
            }
        })
        // console.log(this.props.dataset[0].length)
    }
    hide(){
        $('.l-cover').hide();
        $('.l-massage').hide();
    }
    register(){
        var username = $('.username').val()
        var password = $('.password').val()
        const sql = `insert into user_list (username, password) values ('${username}','${password}')`;
        this.props.Init('http://localhost:888/Datagrid.php',sql)
        
    }
    judge(e){
        console.log(e.target.className)
        if(e.target.className == 'username'){
            var username = $('.username').val()
            if(!/^1[34578]\d{9}$/.test(username)){
                $('.errmsg').text('手机号码不合法')
                return false; 
            }else{
                $('.username').siblings().css({'display':'block'})
                $('.errmsg').text('')
            }
        }
        var password = $('.password').val()
        if(e.target.className == 'password'){
            if(!/^(?!(?:\d+|[a-zA-Z]+)$)[\da-zA-Z]{8,}$/.test(password)){
                $('.errmsg').text('密码格式错误')
                return false;
            }else{
                $('.password').siblings().css({'display':'block'})
                $('.errmsg').text('')
            }
        }
        var repeatpsw = $('.repeatpsw').val()
        if(e.target.className == 'repeatpsw'){
            if(repeatpsw != password){
                 $('.errmsg').text('两次输入的密码不一致')
                return false;
            }else{
                $('.repeatpsw').siblings().css({'display':'block'})
                $('.errmsg').text('')
            }
        }
        

        var code = $('.code').text()
        var incode = $('.incode').val()
        if(e.target.className == 'incode'){

            if(code != incode){
                $('.errmsg').text('验证码错误')
                return false;
            }else{
                $('.errmsg').text('')
            }
        }
    }

}

const mapStateToProps = function(state){
    return {
        // loading: state.student.loading,
        dataset: state.register.dataset || {}
    }
}

// export default registerComponent
export default connect(mapStateToProps, registerAction)(registerComponent)