import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute}  from 'react-router';
import ReactDOM from 'react-dom';
import { Layout, Menu, Breadcrumb, Icon, Avatar , Dropdown} from 'antd';
import {connect} from 'react-redux';
import DatagridComponent from "./../datagrid/DatagridComponent.js";
import DataFormComponent from "./../dataform/DataFormComponent.js";
import * as HomeAction from './HomeAction';
import MenuComponent from "./MenuComponent.js";
import BreadcrumbName from "./HomeConfig";
import './HomeComponent.scss';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const a='/';

let personal;
(function getCookie(){
    let cookies = document.cookie.split('; ');
    cookies.forEach(item =>{
        let temp = item.split('=');
        if(temp[0] == 'user'){
           personal = JSON.parse(temp[1])[0];
        }
    });
    return personal;
})()
const menu = (
  <Menu>
    <Menu.Item key="20">
        <Link to={'/admin_edit?aId='+personal.aId}>修改个人信息</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="21">
        <Link to="/login">退出登录</Link>
    </Menu.Item>
  </Menu>
);

class HomeComponent extends React.Component {
  constructor(props){
      super(props);
  }
	state = {
	    collapsed: false,
      pathName:'',
      personal:personal,
	  };
	onCollapse = (collapsed) => {
		this.setState({ collapsed });
	}
  componentWillMount(){
    this.setState({permission: this.state.personal.aPermission == '经理' ? 1 : 0});
  }
  componentWillReceiveProps(nextProps){
      this.setState({pathName:nextProps.location.pathname.slice(1)});
  }
	render(){
      console.log(this.state.permission);
        return (
            <Layout style={{ minHeight: '100vh' }}>
              <Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
              >
                <div className="logo" >后台管理系统</div>

                <MenuComponent  permission={this.state.permission} />

              </Sider>
              <Layout>
                <Header style={{ background: '#fff', padding: 0 }} >
                	<Breadcrumb style={{ margin: '0px 16px' }}>
                	  <Breadcrumb.Item><Link to="/">首页</Link></Breadcrumb.Item>
                	  <Breadcrumb.Item>{BreadcrumbName[this.state.pathName]}</Breadcrumb.Item>
                  </Breadcrumb>
                  
                  <Dropdown overlay={menu} trigger={['click']}>
                      <Avatar style={{ backgroundColor: '#87d068',position:'absolute',top:20,right:30 }} icon="user" />
                    </Dropdown>
                </Header>
                <Content style={{ margin: '16px 0 0 16px'}}>
                  <div style={{ padding: '0 0 10px', background: '#fff'}}>
                    
                        {React.cloneElement(this.props.children, { edit: this.state.personal })}
                  </div>
                </Content>
              </Layout>
            </Layout>
		  )
	}
}
const mapStateToProps = function(state){
    return {

    }
}
export default connect(mapStateToProps, HomeAction)(HomeComponent)