import BasicLayout from '../layouts/BasicLayout';
import Dashboard from '../routes/Dashboard';
import ListPage from '../routes/ListPage';
import Profile from '../routes/Profile';
import Forms from '../routes/Forms';

export const menus = [{
  name: 'Dashboard',
  component: Dashboard,
  key: 'dashboard',
  path: '/',
  icon: 'setting',
  pageHeader: null,  // 去掉页面标题通栏
}, {
  name: '常用页面',
  icon: 'setting',
  key: 'patterns',
  path: '/patterns',
  defaultCollapsed: true,
  children: [{
    name: '表单页',
    path: 'forms',
    component: Forms,
    icon: 'setting',
  }, {
    name: '列表页',
    path: 'list',
    component: ListPage,
    icon: 'setting',
  }, {
    name: '详情页',
    path: 'profile',
    component: Profile,
    icon: 'setting',
  }],
}];

export default [{
  component: BasicLayout,
  name: '首页',
  children: menus,
}];
