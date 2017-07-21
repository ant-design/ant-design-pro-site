export default {
  // 支持值为 Object 和 Array
  'GET /api/currentUser': {
    name: 'momo.zxy',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/jvpNzacxUYLlNsHTtrAD.png',
    userid: '00000001',
    notifyCount: 5,
  },
  // GET POST 可省略
  'GET /api/users': [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  }, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  }, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  }],
};
