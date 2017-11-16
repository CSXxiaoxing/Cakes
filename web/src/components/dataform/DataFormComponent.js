import React from 'react';
import * as DataFromAction from './DataFormAction.js';
import SpinnerComponent from '../spinner/spinner';
import DataModer from './DataModer';
import {hashHistory} from 'react-router';
import { connect } from 'react-redux';
import {
  Form, Select, InputNumber, Switch, Radio,
  Slider, Button, Upload, Icon,Input, Mention, DatePicker
} from 'antd';

const FormItem = Form.Item;
const MonthPicker = DatePicker.MonthPicker;
const RangePicker = DatePicker.RangePicker;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const { toString } = Mention;
var detalisPic = '';
let editAdd;
let newData;

class App extends React.Component {
  state = {
      tableName:'',
      upfilePath:"",
      upfileDetalis:"",
  }
  constructor(props){
    super(props);
  }
  componentDidMount(){
    const tableName = this.props.location.pathname.slice(1);
    this.setState({tableName:tableName});
    const sql = `select gClass from goods_list group by gClass`;
    this.props.GetClass(sql);
    this.props.dataset.gDetalisPic ? detalisPic = this.props.dataset.gDetalisPic : detalisPic = '' ;
  }
  componentWillReceiveProps(nextProps){
    const tableName = this.props.location.pathname.slice(1);
    this.setState({tableName:tableName});
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      const newTable = `${(this.props.location.pathname.slice(1).split('_'))[0]}_list`;
      if (!err) {
        let filed = ``;
        let val = ``;
        if(editAdd){
          Object.keys(values).forEach(item =>{
            if(item == 'gPicture'){
              this.state.upfilePath == '' ? values[item] : values[item] = this.state.upfilePath;
            } else if(item == 'gDetalisPic'){
              this.state.upfileDetalis == '' ? values[item] : values[item] = detalisPic;
            }
            return filed += `\`${item}\`='${values[item]}',`;
          });
          const sql = `update ${newTable} set ${filed.slice(0,-1)} where \`key\`='${values.key}'`;
          this.props.Save(sql);
          this.refs.moder.showModal(editAdd);
        } else {
          Object.keys(values).forEach(item =>{
              filed += `\`${item}\`,`;
              val += `'${values[item]}',`;
              return;
          });
          if(this.state.tableName == 'admin_add'){
              filed += `aJointime,`;
              val +=  `NOW(),`;
          }
          const sql = `insert into ${newTable}  (${filed.slice(0,-1)}) values (${val.slice(0,-1)})`;
          this.props.Save(sql);
          this.refs.moder.showModal(editAdd);
        }
      }
    });
  }
  goback(){
    hashHistory.go(-1);
  }
  upload(data) {
    console.log('upload');
    /* FormData 是表单数据类 */
    var fd = new FormData();
    var ajax = new XMLHttpRequest();
    fd.append("upload", 1);
    /* 把文件添加到表单里 */
    if(data == 'main'){
        fd.append("upfile", this.refs.upfile.files[0]);
    } else if (data == "detalis") {
        fd.append("upfile", this.refs.detalis.files[0]);
    }
    ajax.open("post", "http://localhost:888/doAction.php", true);
    ajax.onload = function () {
        if(data == 'main'){
            this.setState({upfilePath:ajax.responseText});
        } else if (data == "detalis") {
            detalisPic += `,${ajax.responseText}`; 
            this.setState({upfileDetalis:ajax.responseText});
        }
    }.bind(this);
    ajax.send(fd);
  }

  render() {

   const { getFieldDecorator } = this.props.form;
   const formItemLayout = {
     labelCol: { span: 3 },
     wrapperCol: { span: 16 },
   };
    const path = this.props.location.pathname.slice(1);
    const titleObj = {
      goods_edit:'编辑商品信息',
      goods_add:'添加商品信息',
      class_edit:'编辑商品分类',
      class_add:'添加商品分类',
      admin_edit:'编辑管理员',
      admin_add:'添加管理员',
    }
    const pathObj = {
      goods_edit:true,
      goods_add:false,
      class_edit:true,
      class_add:false,
      admin_edit:true,
      admin_add:false,
    }
    const title = titleObj[path];
    editAdd = pathObj[path];
    editAdd && !this.props.addStatus ? newData = this.props.dataset : newData = {};
    this.state.upfilePath == '' ? newData : newData.gPicture = this.state.upfilePath;
    this.state.upfileDetalis == '' ? newData : newData.gDetalisPic = detalisPic;

    if(this.state.tableName == 'goods_edit' || this.state.tableName == 'goods_add'){
        return (
          <div>
          <div className="editHeader">{title}
          {
            editAdd ? <Button type="primary" className="backPrev" onClick={this.goback.bind(this)}><Icon type="rollback" />返回列表页</Button> : ''
          }
          </div>
                <Form onSubmit={this.handleSubmit}>
                  <FormItem
                    {...formItemLayout}
                    label="商品中文名称"
                    required
                    hasFeedback
                  >
                    {
                      getFieldDecorator('gNameZH',{
                        initialValue:newData.gNameZH,
                        rules:[{
                          max:20,
                          min:2,
                          message:"长度在2到20之间"
                        },{
                          required:true,
                          message:"不能为空！"
                        },{
                          pattern:/^[\u2E80-\u9FFF | \d]+$/g,
                          message:"必须输入中文和数字！"
                        }]
                      })(<Input placeholder="请输入商品中文名称" />)

                    }
                  <span className="ant-form-text">必须输入中文和数字！长度在2到20之间</span>
                  </FormItem>
                  <FormItem
                    {...formItemLayout}
                    label="商品英文名称"
                    required
                    hasFeedback
                  >
                    {
                      getFieldDecorator('gNameEN',{
                        initialValue:newData.gNameEN,
                        rules:[{
                          max:30,
                          min:6,
                          message:"长度在6到30之间"
                        },{
                          required:true,
                          message:"不能为空！"
                        },{
                          pattern:/^[\w | \s]+$/g,
                          message:"不能包括中文！"
                        }]
                      })(<Input placeholder="请输入商品英文名称"/>)
                    }
                    <span className="ant-form-text">不能包括中文！长度在6到30之间</span>
                  </FormItem>
                  <FormItem
                    {...formItemLayout}
                    label="商品分类"
                    hasFeedback
                  >
                    {getFieldDecorator('gClass', {
                      rules: [
                        { required: true, message: '不能为空！' },
                      ],
                      initialValue:newData.gClass 
                    })(
                      <Select placeholder="请输入商品分类" >
                        {
                          this.props.Class.map( (item, idx) => <Option value={item.gClass} key={idx}>{item.gClass}</Option>)
                        }
                      </Select>
                    )}
                  </FormItem>
                  <FormItem
                    {...formItemLayout}
                    label="商品编码"
                    hasFeedback
                  >
                    {getFieldDecorator('key', {
                      rules: [
                        { required: true, message: '不能为空！' },
                      ],
                      initialValue:newData.key 
                    })(<Input placeholder="请输入商品编码"/>)}
                  </FormItem>
                  <FormItem
                    {...formItemLayout}
                    label="商品标签"
                    hasFeedback
                  >
                    {getFieldDecorator('gTag', {
                      rules: [
                        { required: true, message: '不能为空！' },
                      ],
                      initialValue:newData.gTag 
                    })(
                      <Select placeholder="请输入商品标签" >
                        <Option value="新品">新品</Option>
                        <Option value="人气">人气</Option>
                        <Option value="推荐">推荐</Option>
                      </Select>
                    )}
                  </FormItem>
                  <FormItem
                    {...formItemLayout}
                    label="商品描述"
                  >
                    {
                      getFieldDecorator('gDesc',{
                        initialValue:newData.gDesc 
                      })(<Input placeholder="请输入商品描述"/>)
                    }
                  </FormItem>
                  <FormItem
                    {...formItemLayout}
                    label="商品价格"
                    required
                    hasFeedback
                  >
                    {getFieldDecorator('gPrice', { 
                      initialValue: newData.gPrice,
                      rules:[{
                        required:true,
                        message: '不能为空！',
                      }]
                      
                     })(
                      <InputNumber min={1} max={10000} />
                    )}
                    <span className="ant-form-text">元/{newData.gSpec? newData.gSpec.slice(0, 2) : '1磅'}</span>
                  </FormItem>
                  <FormItem
                    {...formItemLayout}
                    label="磅数[可多选]"
                  >
                    {getFieldDecorator('gSpec', {
                      rules: [
                        { required: true, message: '不能为空！', type: 'array' },
                      ],
                      initialValue:newData.gSpec? newData.gSpec.split(',') : [] 
                    })(
                      <Select mode="multiple" placeholder="请选择商品磅数">
                        <Option value="1磅">1磅</Option>
                        <Option value="2磅">2磅</Option>
                        <Option value="3磅">3磅</Option>
                        <Option value="5磅">5磅</Option>
                      </Select>
                    )}
                  </FormItem>
                  <FormItem
                    {...formItemLayout}
                    label="商品介绍"
                  >
                      <Mention
                         style={{ width: '100%', height: 100 }}
                         defaultValue={Mention.toContentState(newData.gIntro?newData.gIntro : '')}
                         multiLines
                       />
                  </FormItem>
                  <FormItem
                    {...formItemLayout}
                    label="商品主图"
                  >
                    {getFieldDecorator('gPicture',{
                      initialValue:newData.gPicture || ''
                    })(
                        <div>
                        <p>
                            <a  className="file">
                            上传商品主图
                            <input type="file"  ref="upfile" className="upfile" onChange={this.upload.bind(this, 'main')}/>
                            </a>
                        </p>
                        {
                            newData.gPicture ? <img className="imgShow" src={newData.gPicture} /> : null
                        }
                        </div>
                    )}
                  </FormItem>
                  <FormItem
                    {...formItemLayout}
                    label="商品详情图"
                  >
                    {getFieldDecorator('gDetalisPic',{
                      initialValue:newData.gDetalisPic || ''
                    })(
                        <div>
                        <p>
                            <a  className="file">
                            上传商品详情图
                            <input type="file"  ref="detalis" className="upfile" onChange={this.upload.bind(this, "detalis")}/>
                            </a>
                        </p>
                        {
                            newData.gDetalisPic ? newData.gDetalisPic.split(',').map(item =>{
                              return <img className="imgShow" src={item} />
                            }) : null
                        }
                        </div>
                    )}
                  </FormItem>
                  <FormItem
                    {...formItemLayout}
                    label="是否上架"
                  >
                      {getFieldDecorator('isPutaway',{
                        initialValue:newData.isPutaway || '上架'
                      })(
                        <RadioGroup>
                          <RadioButton value="上架">上架</RadioButton>
                          <RadioButton value="下架">下架</RadioButton>
                        </RadioGroup>
                      )}
                  </FormItem>

                  <FormItem
                    wrapperCol={{ span: 12, offset: 3 }}
                  >
                    <Button type="primary" htmlType="submit" >{editAdd ? '保存编辑' : '添加商品'}</Button>
                  </FormItem>
                  <DataModer ref="moder" Add={this.props.Add}/>
                </Form>
            </div>
        );
    } else if(this.state.tableName == 'class_edit' || this.state.tableName == 'class_add'){
        return (
            <div>
                <div className="editHeader">{title}
                {
                  editAdd ? <Button type="primary" className="backPrev" onClick={this.goback.bind(this)}><Icon type="rollback" />返回列表页</Button> : ''
                }
                </div>
                <Form onSubmit={this.handleSubmit}>
                  <FormItem
                    {...formItemLayout}
                    label="分类名称"
                    required
                    hasFeedback
                  >
                    {
                      getFieldDecorator('cName',{
                        initialValue:newData.cName,
                        rules:[{
                          max:20,
                          min:2,
                          message:"长度在2到20之间"
                        },{
                          required:true,
                          message:"不能为空！"
                        },{
                          pattern:/^[\u2E80-\u9FFF]+$/g,
                          message:"必须输入中文！"
                        }]
                      })(<Input placeholder="请输入分类名称" />)

                    }
                  <span className="ant-form-text">必须输入中文！长度在2到20之间</span>
                  </FormItem>
                  <FormItem
                    {...formItemLayout}
                    label="分类编码"
                    required
                    hasFeedback
                  >
                    {
                      getFieldDecorator('key',{
                        initialValue:newData.key,
                        rules:[{
                          max:4,
                          min:2,
                          message:"长度在2到4之间"
                        },{
                          required:true,
                          message:"不能为空！"
                        },{
                          pattern:/^[\w | \s]+$/g,
                          message:"不能包括中文！"
                        }]
                      })(<Input placeholder="请输入分类编码"/>)
                    }
                    <span className="ant-form-text">不能包括中文！长度在2到4之间</span>
                  </FormItem>

                  <FormItem
                    wrapperCol={{ span: 12, offset: 3 }}
                  >
                    <Button type="primary" htmlType="submit" >{editAdd ? '保存编辑' : '添加商品'}</Button>
                  </FormItem>
                  <DataModer ref="moder" Add={this.props.Add}/>
                </Form>
            </div>
        );
    } else if(this.state.tableName == 'admin_edit' || this.state.tableName == 'admin_add'){
        return (
            <div>
                <div className="editHeader">{title}
                {
                  editAdd ? <Button type="primary" className="backPrev" onClick={this.goback.bind(this)}><Icon type="rollback" />返回列表页</Button> : ''
                }
                </div>
                <Form onSubmit={this.handleSubmit}>
                  <FormItem
                    {...formItemLayout}
                    label="管理员编号"
                    required
                    
                    hasFeedback
                  >
                    {
                      getFieldDecorator('key',{
                        initialValue:newData.key || Date.now(),
                      })(<Input placeholder="请输入名字" disabled/>)
                    }
                  </FormItem>
                  <FormItem
                    {...formItemLayout}
                    label="管理员名字"
                    required
                    hasFeedback
                  >
                    {
                      getFieldDecorator('aName',{
                        initialValue:newData.aName,
                        rules:[{
                          max:20,
                          min:2,
                          message:"长度在2到20之间"
                        },{
                          required:true,
                          message:"不能为空！"
                        },{
                          pattern:/^[\u2E80-\u9FFF | \w]+$/g,
                          message:"不能为特殊字符！"
                        }]
                      })(<Input placeholder="请输入名字" />)

                    }
                  <span className="ant-form-text">长度在2到20之间</span>
                  </FormItem>
                  <FormItem
                    {...formItemLayout}
                    label="职位"
                    required
                    wrapperCol={{ span: 5 }}
                    hasFeedback
                  >
                    {
                      getFieldDecorator('aPermission', {
                      rules: [
                        { required: true, message: '不能为空！' },
                      ],
                      initialValue:newData.aPermission 
                      })(
                        <Select placeholder="请选择职位" >
                          <Option value="经理">经理</Option>
                          <Option value="员工">员工</Option>
                        </Select>
                      )
                    }
                  </FormItem>
                  <FormItem
                    {...formItemLayout}
                    label="密码"
                    hasFeedback
                  >
                        {getFieldDecorator('aPassword', {
                          rules: [{
                            required: true, message: '请设置密码！',
                          }, {
                            validator: this.checkConfirm,
                          }],
                          initialValue:newData.aPassword 
                        })(
                          <Input type="password" placeholder="请输入密码！"/>
                      )}
                          <span className="ant-form-text">不能为空！</span>
                  </FormItem>
                  
                  <FormItem
                    wrapperCol={{ span: 12, offset: 3 }}
                  >
                    <Button type="primary" htmlType="submit" >{editAdd ? '保存编辑' : '添加商品'}</Button>
                  </FormItem>
                  <DataModer ref="moder" Add={this.props.Add}/>
                </Form>
            </div>
        );
    } else {
      return null;
    }
    
  }
}

const DatagridFormComponent = Form.create()(App);
const mapStateToProps = function(state){
    return {
        loading: state.datagrid.loading,
        dataset: state.datagrid.editData || [],
        Class: state.dataform.Class || [],
        saveStatus: state.dataform.Save || false,
        addStatus: state.dataform.addStatus || false,
    }
}



export default connect(mapStateToProps, DataFromAction)(DatagridFormComponent);