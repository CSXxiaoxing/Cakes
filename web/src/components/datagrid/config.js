export default {
    goods_list: [{
            title: 'Id',
            dataIndex: 'gId',
            width: '5%',
          }, {
            title: '中文名称',
            dataIndex: 'gNameZH',
            width: '12%',
          }, {
            title: '英文名称',
            dataIndex: 'gNameEN',
            width: '12%',
          },{
            title: '商品分类',
            dataIndex: 'gClass',
            width: '8%',
          }, {
            title: '商品标签',
            dataIndex: 'gTag',
            width: '12%',
          },{
            title: '商品价格',
            dataIndex: 'gPrice',
            width: '8%',
          },{
            title: '商品图片',
            dataIndex: 'gPicture',
            width: '8%',
          },{
            title: '是否上架',
            dataIndex: 'isPutaway',
            width: '10%',
          }, {
            title: '操作',
            dataIndex: 'operation',
          }],
    class_list:[{
            title: 'Id',
            dataIndex: 'cId',
            width: '15%',
          }, {
            title: '分类名称',
            dataIndex: 'cName',
            width: '20%',
          }, {
            title: '分类编码',
            dataIndex: 'key',
            width: '30%',
          }, {
            title: '操作',
            dataIndex: 'operation',
          }],
    admin_list:[{
            title: 'Id',
            dataIndex: 'aId',
            width: '10%',
          }, {
            title: '管理员名字',
            dataIndex: 'username',
            width: '15%',
          },{
            title: '管理员编号',
            dataIndex: 'key',
            width: '15%',
          }, {
            title: '职别',
            dataIndex: 'aPermission',
            width: '15%',
          },  {
            title: '加入时间',
            dataIndex: 'aJointime',
            width: '20%',
          }, {
            title: '操作',
            dataIndex: 'operation',
          }],
    user_list:[{
            title: 'Id',
            dataIndex: 'id',
            width: '10%',
          }, {
            title: '用户名',
            dataIndex: 'username',
            width: '15%',
          },{
            title: '手机/电话',
            dataIndex: 'tel',
            width: '15%',
          }, {
            title: '收货地址',
            dataIndex: 'address',
            width: '30%',
          }, {
            title: '操作',
            dataIndex: 'operation',
          }],
    order_list:[{
            title: '订单编码',
            dataIndex: 'gNum',
            width: '10%',
          }, {
            title: '购买用户',
            dataIndex: 'username',
            width: '25%',
          },{
            title: '下单时间',
            dataIndex: 'gTime',
            width: '25%',
          },{
            title: '操作',
            dataIndex: 'OrderOperation',
          }],
    order_detalis:[{
            title: '订单编码',
            dataIndex: 'gNum',
            width: '12%',
          }, {
            title: '购买用户',
            dataIndex: 'username',
            width: '15%',
          },{
            title: '下单时间',
            dataIndex: 'gTime',
            width: '15%',
          },{
            title: '商品中文名称',
            dataIndex: 'gNameZH',
            width: '15%',
          },{
            title: '购买数量',
            dataIndex: 'gNb',
            width: '10%',
          },{
            title: '总价',
            dataIndex: 'gTotal',
            width: '10%',
          },{
            title: '操作',
            dataIndex: 'operation',
          }],
  }
 