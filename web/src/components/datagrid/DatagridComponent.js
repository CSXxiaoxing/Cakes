import React from 'react';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router'
import SpinnerComponent from '../spinner/spinner';
import * as DatagridAction from './DatagridAction';
import { Table, Input, Popconfirm } from 'antd';
import './Datagrid.scss'
import columnsFiled from './config';

const Search = Input.Search;
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

const EditableCell = ({ editable, value, onChange }) => (
  <div>
    {editable
      ? <Input style={{ margin: '-5px 0' }} value={value} onChange={e => onChange(e.target.value)} />
      : value
    }
  </div>
);
class DatagridComponent extends React.Component{
    state = {
        tableName:'',
        searchValue:'',
        personal:personal,
    }
    // componentWillMount(){
    //   this.setState({permission: this.state.personal.aPermission == '经理' ? 1 : 0});
    // }
    componentDidMount(){
        const tableName = this.props.location.pathname.slice(1);
        this.setState({tableName:tableName});
        let sql = `select count(*) as total from ${tableName};select * from ${tableName} limit 0,6;`;
        if(tableName != "order_detalis"){
          this.props.Init(sql);
        }
        
    }
    componentWillReceiveProps(nextProps){
      this.setState({data:nextProps.dataset});
      const self = this;
      const tableName = this.props.location.pathname.slice(1);
      const params = this.props.location.search.slice(1);
      
      columnsFiled[tableName].forEach(item =>{
        switch(item.dataIndex){
          case 'gPicture':
              item.render = (text, record) => {return (<img src={text} className='imgstyle' />)};
              break;
          case 'operation':
              item.render = (text, record) => {
                const { editable } = record;
                return (
                  <div className="editable-row-operations">
                    {
                      <a onClick={() => self.edit(record.key)} className="editbtn">Edit</a>
                    }
                    {
                      self.props.dataset.length > 1 ?
                        (
                          <Popconfirm title="Sure to delete?" onConfirm={() => self.onDelete(record.key)}>
                            <a href="#" className="delbtn">Delete</a>
                          </Popconfirm>
                        ) : null
                    }
                  </div>
                );
              };
              break;
          case 'OrderOperation':
              item.render = (text, record) => {
                const { editable } = record;
                return (
                  <div className="editable-row-operations">
                      <a onClick={() => self.detalis(record.gNum)} className="editbtn">detalis</a>
                    {
                      self.props.dataset.length > 1 ?
                        (
                          <Popconfirm title="Sure to delete?" onConfirm={() => self.onDelete(record.key)}>
                            <a href="#" className="delbtn">Delete</a>
                          </Popconfirm>
                        ) : null
                    }
                  </div>
                );
              };
              break;
          default:
              item.render =  (text, record) => self.renderColumns(text, record, 'gId')
        }
      });
      this.columns =columnsFiled[tableName];
      if(tableName != this.state.tableName && tableName != "order_detalis" ){
          this.setState({
            tableName:tableName
          });
            
          let sql = `select count(*) as total from ${tableName};select * from ${tableName} limit 0,6;`;
          this.props.Init(sql);
      } 
    }
    constructor(props) {
          super(props);
      }
      renderColumns(text, record, column) {
        return (
          <EditableCell value={text} />
        );
      }
      search(value){
          this.setState({searchValue:value});
          const searchFiled = {
            goods_list:`gId,gNameEN,gNameZH,gTag,gClass,gPrice,isPutaway`,
            class_list:`cId,cName,\`key\``,
            admin_list:`aId,aName,aPermission,\`key\``,
            user_list:`username,id,tel,address`,
            order_list:`gNum,username,gTime`,
          }
          const sql = `select count(*) as total from ${this.state.tableName} where concat(${searchFiled[this.state.tableName]}) like '%${value}%';select * from ${this.state.tableName} where concat(${searchFiled[this.state.tableName]}) like '%${value}%' limit 0,6`;
          this.props.Search(sql);
      }
      onDelete = (key) => {
          const sql = `delete from ${this.state.tableName} where \`key\`='${key}'`;
          this.props.Delete(sql);
          const dataSource = [...this.state.data];
          let page = document.querySelector('.ant-pagination-item-active a').innerHTML;
          const sql_new = `select count(*) as total from ${this.state.tableName};select * from ${this.state.tableName} limit ${page*1-1},6;`;
          this.props.Init(sql_new);
      }
      edit(key) {
        const newData = [...this.state.data];
        const target = newData.filter(item => key === item.key)[0];
        if (target) {
          target.editable = true;
          this.setState({ data: newData });
        }
        this.props.Edit(target);
        hashHistory.push(`/${(this.state.tableName.split('_'))[0]}_edit`);
      }
      detalis(gNum) {
          const sql = `select count(*) as total from order_list where gNum='${gNum}';select * from order_list where gNum='${gNum}' limit 0,6;`;
          this.props.Init(sql);
        hashHistory.push(`/order_detalis?${gNum}`);
      }
      render() {
        let self = this;
        const titleObj = {
          goods_list:"商品列表",
          class_list:"分类列表",
          admin_list:"管理员列表",
          user_list:"用户列表",
          order_list:"订单列表",
          orderDetalis_list:"订单详情列表",
        }
        return (
          <div>
              <div className="listHeader">
                  <span className="listName">{titleObj[this.state.tableName]}</span>
                  <Search
                     placeholder="请输入搜索内容"
                     style={{ width: 250 }}
                     onSearch={value => this.search(value)}
                   />
              </div>
              
              <Table 
                bordered 
                dataSource={this.props.dataset} 
                pagination={{
                  total:Number(this.props.totalNumber.total),
                  pageSize:6,
                  onChange(current, pageSize) {
                      const sql = `select count(*) as total from ${self.state.tableName};select * from ${self.state.tableName} limit ${(current-1)*pageSize},${pageSize};`;
                      self.props.ChangePage(sql);
                  }
                }}
                columns={this.columns}  
              />
          </div>
        );
      }
}

const mapStateToProps = function(state){
    return {
        loading: state.datagrid.loading,
        dataset: state.datagrid.dataset || [],
        totalNumber: state.datagrid.pagination || {},
        editData: state.datagrid.editData,
        personal: state.login.personal,
    }
}
export default connect(mapStateToProps, DatagridAction)(DatagridComponent)