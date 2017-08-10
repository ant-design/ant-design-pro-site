import BasicLayout from '../layouts/BasicLayout';

import Analysis from '../routes/Dashboard/Analysis';
import Monitor from '../routes/Dashboard/Monitor';
import Workplace from '../routes/Dashboard/Workplace';

import TableList from '../routes/List/TableList';
import CoverCardList from '../routes/List/CoverCardList';
import CardList from '../routes/List/CardList';
import FilterCardList from '../routes/List/FilterCardList';
import SearchList from '../routes/List/SearchList';
import BasicList from '../routes/List/BasicList';

import Profile from '../routes/Profile';
import BasicForm from '../routes/Forms/BasicForm';
import AdvancedForm from '../routes/Forms/AdvancedForm';
import StepForm from '../routes/Forms/StepForm';
import Step2 from '../routes/Forms/StepForm/Step2';
import Step3 from '../routes/Forms/StepForm/Step3';

import Exception403 from '../routes/Exception/403';
import Exception404 from '../routes/Exception/404';
import Exception500 from '../routes/Exception/500';

import Success from '../routes/Result/Success';
import Error from '../routes/Result/Error';

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
    component: BasicForm,
    icon: 'setting',
  }, {
    name: '分步表单',
    path: 'step-form',
    component: StepForm,
    icon: 'setting',
    children: [{
      path: 'confirm',
      component: Step2,
    }, {
      path: 'result',
      component: Step3,
    }],
  }, {
    name: '高级表单',
    path: 'advanced-form',
    component: AdvancedForm,
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
    component: BasicList,
    icon: 'setting',
  }, {
    name: '卡片列表',
    path: 'card-list',
    component: CardList,
    icon: 'setting',
  }, {
    name: '卡片列表（封面）',
    path: 'cover-card-list',
    component: CoverCardList,
    icon: 'setting',
  }, {
    name: '带筛选卡片列表',
    path: 'filter-card-list',
    component: FilterCardList,
    icon: 'setting',
  }, {
    name: '搜索列表',
    path: 'search',
    component: SearchList,
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
    component: Success,
    icon: 'setting',
  }, {
    name: '失败',
    path: 'fail',
    component: Error,
    icon: 'setting',
  }],
}, {
  name: '错误',
  path: 'error',
  icon: 'setting',
  children: [{
    name: '403',
    path: '403',
    component: Exception403,
    icon: 'setting',
  }, {
    name: '404',
    path: '404',
    component: Exception404,
    icon: 'setting',
  }, {
    name: '500',
    path: '500',
    component: Exception500,
    icon: 'setting',
  }],
}];

export default [{
  component: BasicLayout,
  name: '首页',
  children: menus,
}];
