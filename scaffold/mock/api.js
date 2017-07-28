import { imgMap } from './utils';

export default {
  getNotice: [
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
  getActivities: [
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
};
