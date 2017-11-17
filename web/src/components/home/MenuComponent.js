import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Avatar , Dropdown} from 'antd';
import {Router, Route, Link, hashHistory, IndexRoute}  from 'react-router';
const SubMenu = Menu.SubMenu;
const a='/';
export default class MenuComponent extends React.Component {

  render() {
    return (
      <Menu theme="dark" defaultSelectedKeys={['3']} mode="inline" defaultOpenKeys={["sub1"]}>
        <SubMenu
          key="sub1"
          title={<span><Icon type="appstore" /><span>商品管理</span></span>}
        >
          <Menu.Item key="3"><Link to='/goods_list'>商品列表</Link></Menu.Item>
          <Menu.Item key="4"  className={this.props.permission ? 'menushow' : 'menuhidden'}><Link to='/goods_add'>添加商品</Link></Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub6"
          title={<span><Icon type="switcher" /><span>商品分类</span></span>}
        >
          <Menu.Item key="15"><Link to='/class_list'>分类列表</Link></Menu.Item>

          <Menu.Item key="16" className={this.props.permission ? 'menushow' : 'menuhidden'}><Link to='/class_add'>添加分类</Link></Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={<span><Icon type="user" /><span>用户管理</span></span>}
        >
          <Menu.Item key="6"><Link to='/user_list'>用户列表</Link></Menu.Item>
        </SubMenu> 
        <SubMenu
          key="sub3"
          title={<span><Icon type="team" /><span>订单管理</span></span>}
        >
          <Menu.Item key="8"><Link to='/order_list'>订单列表</Link>订单列表</Menu.Item>
        </SubMenu>
        {
          this.props.permission ? <SubMenu
          key="sub4"
          title={<span><Icon type="setting" /><span>管理员管理</span></span>}
        >
          <Menu.Item key="10"><Link to='/admin_list'>管理员列表</Link></Menu.Item>
          <Menu.Item key="11"><Link to='/admin_add'>添加管理员</Link></Menu.Item>
        </SubMenu> : null
        }
        
      </Menu>
    );
  }
}
