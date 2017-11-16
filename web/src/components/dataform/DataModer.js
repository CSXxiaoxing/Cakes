import { Modal, Button } from 'antd';
import React from 'react';
import { hashHistory } from 'react-router';
import './DataForm.scss';
import * as DataFromAction from './DataFormAction.js';
export default class DataModer extends React.Component {
  state = { 
    visible: false,
    editAdd:true,
  }
  showModal = (editAdd) => {

    this.setState({
      visible: true,
      editAdd:editAdd,
    });
  }
  handleOk = (e) => {
    this.setState({
      visible: false,
    });
    hashHistory.go(-1);
  }
  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
    if(!this.state.editAdd){
      this.props.Add();
    }
  }
  render() {
    return (
      <div>
        <Modal
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          cancelText={this.state.editAdd ? '继续编辑' : '继续添加'}
          okText="查看商品列表"
          title="温馨提示"
        >
          <p className="tips">保存信息成功！</p>
        </Modal>
      </div>
    );
  }
}
