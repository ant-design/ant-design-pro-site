import BasicLayout from '../layouts/BasicLayout';

import Analysis from '../routes/Dashboard/Analysis';
import Monitor from '../routes/Dashboard/Monitor';
import Workplace from '../routes/Dashboard/Workplace';

import TableList from '../routes/List/TableList';

import ListPage from '../routes/ListPage';
import Profile from '../routes/Profile';
import BasicForms from '../routes/Forms/BasicForms';

export const menus = [{
  name: 'Dashboard',
  icon: 'setting',
  path: 'dashboard',
  children: [{
    name: '分析页',
    path: 'analysis',
    component: Analysis,
    icon: 'setting',
  }, {
    name: '监控页',
    path: 'monitor',
    component: Monitor,
    icon: 'setting',
  }, {
    name: '工作台',
    path: 'workplace',
    component: Workplace,
    icon: 'setting',
  }],
}, {
  name: '表单页',
  path: 'form',
  icon: 'setting',
  children: [{
    name: '基础表单',
    path: 'basic-form',
    component: BasicForms,
    icon: 'setting',
  }, {
    name: '分组表单',
    path: 'group-form',
    component: null,
    icon: 'setting',
  }, {
    name: '分步表单',
    path: 'step-form',
    component: null,
    icon: 'setting',
  }],
}, {
  name: '列表页',
  path: 'list',
  icon: 'setting',
  children: [{
    name: '标准表格（表格查询）',
    path: 'table-list',
    component: TableList,
    icon: 'setting',
  }, {
    name: '标准列表',
    path: 'basic-list',
    component: ListPage,
    icon: 'setting',
  }, {
    name: '卡片列表',
    path: 'card-list',
    component: null,
    icon: 'setting',
  }, {
    name: '卡片列表（封面）',
    path: 'cover-card-list',
    component: null,
    icon: 'setting',
  }, {
    name: '搜索列表',
    path: 'search',
    component: null,
    icon: 'setting',
  }],
}, {
  name: '详情页',
  path: 'profile',
  component: Profile,
  icon: 'setting',
}, {
  name: '帐户',
  icon: 'setting',
  path: 'user',
  children: [{
    name: '登录',
    path: 'login',
    component: null,
    icon: 'setting',
  }, {
    name: '注册',
    path: 'registry',
    component: null,
    icon: 'setting',
  }],
}, {
  name: '结果',
  path: 'result',
  icon: 'setting',
  children: [{
    name: '成功',
    path: 'success',
    component: null,
    icon: 'setting',
  }, {
    name: '失败',
    path: 'fail',
    component: null,
    icon: 'setting',
  }, {
    name: '处理中',
    path: 'wait',
    component: null,
    icon: 'setting',
  }],
}, {
  name: '错误',
  path: 'error',
  icon: 'setting',
  children: [{
    name: '403',
    path: '403',
    component: null,
    icon: 'setting',
  }, {
    name: '404',
    path: '404',
    component: null,
    icon: 'setting',
  }, {
    name: '500',
    path: '500',
    component: null,
    icon: 'setting',
  }],
}];

export default [{
  component: BasicLayout,
  name: '首页',
  children: menus,
}];
