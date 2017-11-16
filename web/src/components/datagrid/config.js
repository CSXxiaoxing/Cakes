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
            dataIndex: 'aName',
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
  }
 