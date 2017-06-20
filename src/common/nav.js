import BasicLayout from '../layouts/BasicLayout';
import Dashboard from '../routes/Dashboard';
import ListPage from '../routes/ListPage';
import Profile from '../routes/Profile';
import Forms from '../routes/Forms';

export default [{
  component: BasicLayout,
  name: '首页',
  children: [{
    name: 'Dashboard',
    component: Dashboard,
    path: '/',
    icon: 'setting',
    pageHeader: null,  // 去掉页面标题通栏
  }, {
    name: '常用页面',
    icon: 'setting',
    path: '/patterns',
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
  }],
}];
