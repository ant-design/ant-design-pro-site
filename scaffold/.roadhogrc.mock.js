import mockjs from 'mockjs';
import { getRule, postRule } from './mock/rule';
import { getActivities, getNotice, getFakeList } from './mock/api';
import { getFakeChartData } from './mock/chart';
import { imgMap } from './mock/utils';

// 代码中会兼容本地 service mock 以及部署站点的静态数据

const proxy = {
  // 支持值为 Object 和 Array
  'GET /api/currentUser': {
    name: 'momo.zxy',
    avatar: imgMap.user,
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
  'GET /api/project/notice': getNotice,
  'GET /api/activities': getActivities,
  'GET /api/rule': getRule,
  'POST /api/rule': postRule,
  'POST /api/forms': (req, res) => {
    return res.send('Ok');
  },
  'GET /api/tags': mockjs.mock({
    'list|100': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }]
  }),
  'GET /api/fake_list': getFakeList,
  'GET /api/fake_chart_data': getFakeChartData,
  'POST /api/login/account': (req, res) => {
    return res.send({ status: 'error', type: 'account' });
  },
  'POST /api/login/mobile': (req, res) => {
    return res.send({ status: 'ok', type: 'mobile' });
  },
  'POST /api/register': (req, res) => {
    return res.send({ status: 'ok' });
  },
};

const mockApi = {};
Object.keys(proxy).forEach(key => {
  mockApi[key] = (req, res, u, b) => {

    // tricks
    const isStatic = !(res && res.json);
    if (isStatic) {
      res = {
        send: (data) => {
          return data;
        },
        json: (data) => {
          return data;
        },
      }
    }

    const result = proxy[key];
    let func;
    if (Object.prototype.toString.call(result) === '[object Function]') {
      func = result;
    } else {
      func = (req, res, u, b) => {
        if (!isStatic) {
          res.json(result);
        } else {
          return result;
        }
      }
    }

    if (!isStatic) {
      setTimeout(() => {
        func(req, res, u, b);
      }, 1000);
    } else {
      return func(null, null, u, b);
    }
  }
});

export default mockApi;
