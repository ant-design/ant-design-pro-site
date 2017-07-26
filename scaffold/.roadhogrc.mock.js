// 代码中会兼容本地 service mock 以及部署站点的静态数据

const imgMap = {
  a: 'https://gw.alipayobjects.com/zos/rmsportal/ZrkcSjizAKNWwJTwcadT.png',
  b: 'https://gw.alipayobjects.com/zos/rmsportal/KYlwHMeomKQbhJDRUVvt.png',
  c: 'https://gw.alipayobjects.com/zos/rmsportal/gabvleTstEvzkbQRfjxu.png',
  d: 'https://gw.alipayobjects.com/zos/rmsportal/jvpNzacxUYLlNsHTtrAD.png',
};

// refers: https://www.sitepoint.com/get-url-parameters-with-javascript/
function getUrlParams(url) {
  var d = decodeURIComponent;
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
  var obj = {};
  if (queryString) {
    queryString = queryString.split('#')[0];
    var arr = queryString.split('&');
    for (var i = 0; i < arr.length; i++) {
      var a = arr[i].split('=');
      var paramNum = undefined;
      var paramName = a[0].replace(/\[\d*\]/, function (v) {
        paramNum = v.slice(1, -1);
        return '';
      });
      var paramValue = typeof(a[1]) === 'undefined' ? true : a[1];
      if (obj[paramName]) {
        if (typeof obj[paramName] === 'string') {
          obj[paramName] = d([obj[paramName]]);
        }
        if (typeof paramNum === 'undefined') {
          obj[paramName].push(d(paramValue));
        }
        else {
          obj[paramName][paramNum] = d(paramValue);
        }
      }
      else {
        obj[paramName] = d(paramValue);
      }
    }
  }
  return obj;
}

// mock tableListDataSource
let tableListDataSource = [];
for (let i = 0; i < 46; i += 1) {
  tableListDataSource.push({
    key: i,
    no: `TradeCode ${i}`,
    description: '这是一段描述',
    callNo: Math.floor(Math.random() * 1000),
    status: Math.floor(Math.random() * 10) % 2,
    updatedAt: new Date(`2017-07-${Math.floor(i / 2) + 1} ${Math.floor(i / 2) + 1}:00:00`),
  });
}

export default {
  // 支持值为 Object 和 Array
  'GET /api/currentUser': {
    name: 'momo.zxy',
    avatar: imgMap.a,
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
  'GET /api/project/notice': [
    {
      id: 'xxx1',
      title: '消息列表体验优化',
      logo: imgMap.b,
      description: '这是一条描述信息这是一条描述信息',
      updatedAt: new Date(),
      member: '蜂鸟项目组',
    },
    {
      id: 'xxx2',
      title: 'XX 平台',
      logo: imgMap.c,
      description: '这是一条描述信息',
      updatedAt: new Date('2017-07-24 11:00:00'),
      member: '凤蝶精英小分队',
    },
    {
      id: 'xxx3',
      title: '消息列表体验优化',
      logo: imgMap.a,
      description: '这是一条描述信息这是一条描述信息',
      updatedAt: new Date(),
      member: '蜂鸟项目组',
    },
    {
      id: 'xxx4',
      title: '文档中心1',
      logo: imgMap.a,
      description: '这是一条描述信息这是一条描述信息',
      updatedAt: new Date('2017-07-23 06:23:00'),
      member: '成都超级小分队',
    },
    {
      id: 'xxx5',
      title: '文档中心2',
      logo: imgMap.b,
      description: '这是一条描述信息这是一条描述信息',
      updatedAt: new Date('2017-07-23 06:23:00'),
      member: '成都超级小分队',
    },
    {
      id: 'xxx6',
      title: '智能运营中心',
      logo: imgMap.c,
      description: '这是一条描述信息这是一条描述信息',
      updatedAt: new Date('2017-07-23 06:23:00'),
      member: '成都超级小分队',
    },
  ],
  'GET /api/activities': [
    {
      id: 'trend-1',
      updatedAt: new Date(),
      user: {
        name: '林东东',
        avatar: imgMap.a,
      },
      action: '在 [凤蝶精英小分队](http://github.com/) 新建项目 [六月迭代](http://github.com/)',
    },
    {
      id: 'trend-2',
      updatedAt: new Date(),
      user: {
        name: '林嘻嘻',
        avatar: imgMap.c,
      },
      action: '在 [凤蝶精英小分队](http://github.com/) 新建项目 [六月迭代](http://github.com/)',
    },
    {
      id: 'trend-3',
      updatedAt: new Date(),
      user: {
        name: '林囡囡',
        avatar: imgMap.b,
      },
      action: '在 [凤蝶精英小分队](http://github.com/) 新建项目 [六月迭代](http://github.com/)',
    },
    {
      id: 'trend-4',
      updatedAt: new Date(),
      user: {
        name: '林贝贝',
        avatar: imgMap.c,
      },
      action: '在 [5 月日常迭代](http://github.com/) 更新至已发布状态',
    },
    {
      id: 'trend-5',
      updatedAt: new Date(),
      user: {
        name: '林忠忠',
        avatar: imgMap.a,
      },
      action: '在 [工程效能](http://github.com/) 发布了 [留言](http://github.com/)',
    },
    {
      id: 'trend-6',
      updatedAt: new Date(),
      user: {
        name: '林呜呜',
        avatar: imgMap.d,
      },
      action: '在 [云雀](http://github.com/) 新建项目 [品牌迭代](http://github.com/)',
    },
  ],

  'GET /api/rule': (req, res, u) => {
    let url = u;
    if (!url || Object.prototype.toString.call(url) !== '[object String]') {
      url = req.url;
    }

    const params = new getUrlParams(url);

    let dataSource = [...tableListDataSource];

    if (params.sorter) {
      const s = params.sorter.split('_');
      dataSource = dataSource.sort((prev, next) => {
        if (s[1] === 'descend') {
          return next[s[0]] - prev[s[0]];
        }
        return prev[s[0]] - next[s[0]];
      });
    }

    if (params.status) {
      const s = params.status.split(',');
      if (s.length === 1) {
        dataSource = dataSource.filter(data => data.status == s[0]);
      }
    }

    if (params.no) {
      dataSource = dataSource.filter(data => data.no.indexOf(params.no) > -1);
    }

    const result = {
      list: dataSource,
      pagination: {
        total: dataSource.length,
        pageSize: 10,
        current: parseInt(params.currentPage) || 1,
      }
    };

    if (res && res.json) {
      res.json(result);
    } else {
      return result;
    }

  },
  'POST /api/rule': (req, res, u, b) => {
    let url = u;
    if (!url || Object.prototype.toString.call(url) !== '[object String]') {
      url = req.url;
    }

    const body = (b && b.body) || req.body;
    const method = body.method;

    switch (method) {
      case 'delete':
        const no = body.no;
        tableListDataSource = tableListDataSource.filter(item => no.indexOf(item.no) === -1);
        break;
      default:
        break;
    }

    const result = {
      list: tableListDataSource,
      pagination: {
        total: tableListDataSource.length,
      }
    };

    if (res && res.json) {
      res.json(result);
    } else {
      return result;
    }
  },
};
