import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute}  from 'react-router';
import ReactDOM from 'react-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import DatagridComponent from "./../datagrid/DatagridComponent.js"
import './HomeComponent.scss'

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
export default class HomeComponent extends React.Component {
	state = {
	    collapsed: false,
	  };
	onCollapse = (collapsed) => {
		this.setState({ collapsed });
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
                    <span><Link to='/student'>首页</Link></span>
                  </Menu.Item>
                  <SubMenu
                    key="sub1"
                    title={<span><Icon type="appstore" /><span>商品管理</span></span>}
                  >
                    <Menu.Item key="3">商品列表</Menu.Item>
                    <Menu.Item key="4">添加商品</Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub6"
                    title={<span><Icon type="switcher" /><span>商品分类</span></span>}
                  >
                    <Menu.Item key="15">分类列表</Menu.Item>
                    <Menu.Item key="16">添加分类</Menu.Item>
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
                    key="sub5"
                    title={<span><Icon type="message" /><span>评论管理</span></span>}
                  >
                    <Menu.Item key="13">评论列表</Menu.Item>
                    <Menu.Item key="14">评论回收站</Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub4"
                    title={<span><Icon type="setting" /><span>管理员管理</span></span>}
                  >
                    <Menu.Item key="10">管理员列表</Menu.Item>
                    <Menu.Item key="11">添加管理员</Menu.Item>
                    <Menu.Item key="12">删除管理员</Menu.Item>
                  </SubMenu>
                  
                </Menu>
              </Sider>
              <Layout>
                <Header style={{ background: '#fff', padding: 0 }} >
                	<Breadcrumb style={{ margin: '0px 16px' }}>
                	  <Breadcrumb.Item>User</Breadcrumb.Item>
                	  <Breadcrumb.Item>Bill</Breadcrumb.Item>
                	</Breadcrumb>
                </Header>
                <Content style={{ margin: '16px 16px' }}>
                  <div style={{ padding: 24, background: '#fff', minHeight: 490 }}>
                    <DatagridComponent />
                  </div>
                </Content>
              </Layout>
            </Layout>
		  )
	}
}




// class SiderDemo extends React.Component {
//   state = {
//     collapsed: false,
//   };
//   onCollapse = (collapsed) => {
//     console.log(collapsed);
//     this.setState({ collapsed });
//   }
//   render() {
//     return (
//       <Layout style={{ minHeight: '100vh' }}>
//         <Sider
//           collapsible
//           collapsed={this.state.collapsed}
//           onCollapse={this.onCollapse}
//         >
//           <div className="logo" />
//           <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
//             <Menu.Item key="1">
//               <Icon type="pie-chart" />
//               <span>Option 1</span>
//             </Menu.Item>
//             <Menu.Item key="2">
//               <Icon type="desktop" />
//               <span>Option 2</span>
//             </Menu.Item>
//             <SubMenu
//               key="sub1"
//               title={<span><Icon type="user" /><span>User</span></span>}
//             >
//               <Menu.Item key="3">Tom</Menu.Item>
//               <Menu.Item key="4">Bill</Menu.Item>
//               <Menu.Item key="5">Alex</Menu.Item>
//             </SubMenu>
//             <SubMenu
//               key="sub2"
//               title={<span><Icon type="team" /><span>Team</span></span>}
//             >
//               <Menu.Item key="6">Team 1</Menu.Item>
//               <Menu.Item key="8">Team 2</Menu.Item>
//             </SubMenu>
//             <Menu.Item key="9">
//               <Icon type="file" />
//               <span>File</span>
//             </Menu.Item>
//           </Menu>
//         </Sider>
//         <Layout>
//           <Header style={{ background: '#fff', padding: 0 }} />
//           <Content style={{ margin: '0 16px' }}>
//             <Breadcrumb style={{ margin: '16px 0' }}>
//               <Breadcrumb.Item>User</Breadcrumb.Item>
//               <Breadcrumb.Item>Bill</Breadcrumb.Item>
//             </Breadcrumb>
//             <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
//               Bill is a cat.
//             </div>
//           </Content>
//           <Footer style={{ textAlign: 'center' }}>
//             Ant Design ©2016 Created by Ant UED
//           </Footer>
//         </Layout>
//       </Layout>
//     );
//   }
// }
