import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute, browserHistory}  from 'react-router';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
import { Layout, Menu, Breadcrumb, Icon, Avatar , Dropdown, Form, Input, Button, Checkbox} from 'antd';
// mountNode
import './loginJS.js'
import './login.scss'
import * as loginAction from './loginAction'

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
    componentDidMount(){
        // console.log(this.props,111)
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    find(){
        var username = $('#userName').val();
        var password = $('#password').val();

        this.props.Find(username).then(res=>{
            console.log(res[0],123)
            if(res[0].length == '0'){
                alert('请输入正确的账户密码')
            }else{
                if(res[0][0].password != password){
                    alert('密码输入错误')
                }else{
                    this.props.Token('http://localhost:888/token.php',{username,password}).then(res=>{
                        console.log(res[0])
                        document.cookie = 'token ='+res[0];
                        // alert('登录成功')
                        // hashHistory.push('/')
                    })
                }
            }
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
        <div id="LoginDL">
        <h1>后台管理系统登录</h1>
        <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
                {getFieldDecorator('userName', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                })(
                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                )}
            </FormItem>
            <FormItem>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                    <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                )}
            </FormItem>
            <FormItem>
                




                <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.find.bind(this)} >
                    Log in
                
                </Button>
            </FormItem>
        </Form>
        </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

// ReactDOM.render(<WrappedNormalLoginForm />, mountNode);



const mapStateToProps = function(state){
    var dataset  =  state.datagrid.dataset || []
    console.log(dataset)
    return {
        // data: state.login.dataset || {}
    }
}

export default connect(mapStateToProps, loginAction)(WrappedNormalLoginForm)
