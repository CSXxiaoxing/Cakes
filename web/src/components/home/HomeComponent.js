import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute}  from 'react-router';
import ReactDOM from 'react-dom';
import { Layout, Menu, Breadcrumb, Icon, Avatar , Dropdown} from 'antd';

import DatagridComponent from "./../datagrid/DatagridComponent.js";
import DataFormComponent from "./../dataform/DataFormComponent.js";
import BreadcrumbName from "./HomeConfig";
import './HomeComponent.scss';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const a='/';
const menu = (
  <Menu>
    <Menu.Item key="20">
      <Link to="/admin_edit">修改个人信息</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="21">退出登录</Menu.Item>
  </Menu>
);
export default class HomeComponent extends React.Component {
  constructor(props){
      super(props);
  }
	state = {
	    collapsed: false,
      pathName:'',
	  };
	onCollapse = (collapsed) => {
		this.setState({ collapsed });

	}
  componentWillReceiveProps(nextProps){
      this.setState({pathName:nextProps.location.pathname.slice(1)});
  }
	render(){
        return (
            <Layout style={{ minHeight: '100vh' }}>
              <Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
              >
                <div className="logo" >后台管理系统</div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" defaultOpenKeys={["sub1"]}>
                  <Menu.Item key="1">
                    <Icon type="home" />
                    <span><Link to='/'><span className='home'>首页</span></Link></span>
                  </Menu.Item>
                  <SubMenu
                    key="sub1"
                    title={<span><Icon type="appstore" /><span>商品管理</span></span>}
                  >
                    <Menu.Item key="3"><Link to='/goods_list'>商品列表</Link></Menu.Item>
                    <Menu.Item key="4"><Link to='/goods_add'>添加商品</Link></Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub6"
                    title={<span><Icon type="switcher" /><span>商品分类</span></span>}
                  >
                    <Menu.Item key="15"><Link to='/class_list'>分类列表</Link></Menu.Item>
                    <Menu.Item key="16"><Link to='/class_add'>添加分类</Link></Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub2"
                    title={<span><Icon type="user" /><span>用户管理</span></span>}
                  >
                    <Menu.Item key="6">用户列表</Menu.Item>
                    <Menu.Item key="7">用户修改</Menu.Item>
                  </SubMenu> 
                  <SubMenu
                    key="sub3"
                    title={<span><Icon type="team" /><span>订单管理</span></span>}
                  >
                    <Menu.Item key="8">订单列表</Menu.Item>
                    <Menu.Item key="9">退货单列表</Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub4"
                    title={<span><Icon type="setting" /><span>管理员管理</span></span>}
                  >
                    <Menu.Item key="10"><Link to='/admin_list'>管理员列表</Link></Menu.Item>
                    <Menu.Item key="11"><Link to='/admin_add'>添加管理员</Link></Menu.Item>
                  </SubMenu>
                </Menu>
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
                    {this.props.children}
                  </div>
                </Content>
              </Layout>
            </Layout>
		  )
	}
}
