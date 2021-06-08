---
title: API
order: 2
nav:
  title: 配置
  path: /config
  order: 2
---

> 查看 [umi 文档](https://umijs.org/zh-CN/api) 了解更多配置

## history

可用于获取当前路由信息，

```tsx | pure
import { history } from 'umi';

// history 栈里的实体个数
console.log(history.length);

// 当前 history 跳转的 action，有 PUSH、REPLACE 和 POP 三种类型
console.log(history.action);

// location 对象，包含 pathname、search 和 hash
console.log(history.location.pathname);
console.log(history.location.search);
console.log(history.location.hash);
```

可用于路由跳转，

```tsx | pure
import { history } from 'umi';

// 跳转到指定路由
history.push('/list');

// 带参数跳转到指定路由
history.push('/list?a=b');
history.push({
  pathname: '/list',
  query: {
    a: 'b',
  },
});

// 跳转到上一个路由
history.goBack();
```

也可用于路由监听，

```tsx | pure
import { history } from 'umi';

const unlisten = history.listen((location, action) => {
  console.log(location.pathname);
});
unlisten();
```

## Link

链接组件，例如：

```tsx | pure
import { Link } from 'umi';

export default () => {
  return (
    <div>
      {/* 点击跳转到指定 /about 路由 */}
      <Link to="/about">About</Link>

      {/* 点击跳转到指定 /courses 路由，
         附带 query { sort: 'name' }
     */}
      <Link to="/courses?sort=name">Courses</Link>

      {/* 点击跳转到指定 /list 路由，
         附带 query: { sort: 'name' }
         附带 hash: 'the-hash'
         附带 state: { fromDashboard: true }
     */}
      <Link
        to={{
          pathname: '/list',
          search: '?sort=name',
          hash: '#the-hash',
          state: { fromDashboard: true },
        }}
      >
        List
      </Link>

      {/* 点击跳转到指定 /profile 路由，
         附带所有当前 location 上的参数
     */}
      <Link
        to={(location) => {
          return { ...location, pathname: '/profile' };
        }}
      />

      {/* 点击跳转到指定 /courses 路由，
         但会替换当前 history stack 中的记录
     */}
      <Link to="/courses" replace />

      {/*
         innerRef 允许你获取基础组件（这里应该就是 a 标签或者 null）
     */}
      <Link
        to="/courses"
        innerRef={(node) => {
          // `node` refers to the mounted DOM element
          // or null when unmounted
        }}
      />
    </div>
  );
};
```

### NavLink

特殊版本的 `<Link />` 。当指定路由（`to=指定路由`）命中时，可以附着特定样式。

```tsx | pure
import { NavLink } from 'umi';

export default () => {
  return (
    <div>
      {/* 和 Link 等价 */}
      <NavLink to="/about">About</NavLink>

      {/* 当前路由为 /faq 时，附着 class selected */}
      <NavLink to="/faq" activeClassName="selected">
        FAQs
      </NavLink>

      {/* 当前路由为 /faq 时，附着 style */}
      <NavLink
        to="/faq"
        activeStyle={{
          fontWeight: 'bold',
          color: 'red',
        }}
      >
        FAQs
      </NavLink>

      {/* 当前路由完全匹配为 /profile 时，附着 class */}
      <NavLink exact to="/profile" activeClassName="selected">
        Profile
      </NavLink>

      {/* 当前路由为 /profile/ 时，附着 class */}
      <NavLink strict to="/profile/" activeClassName="selected">
        Profile
      </NavLink>

      {/* 当前路由为 /profile，并且 query 包含 name 时，附着 class */}
      <NavLink
        to="/profile"
        exact
        activeClassName="selected"
        isActive={(match, location) => {
          if (!match) {
            return false;
          }
          return location.search.includes('name');
        }}
      >
        Profile
      </NavLink>
    </div>
  );
};
```

### useHistory

hooks，获取 `history` 对象

```tsx | pure
import { useHistory } from 'umi';

export default () => {
  const history = useHistory();
  return (
    <div>
      <ul>
        <li>history: {history.action}</li>
      </ul>
    </div>
  );
};
```

### useLocation

hooks，获取 `location` 对象

```tsx | pure
import { useLocation } from 'umi';

export default () => {
  const location = useLocation();
  return (
    <div>
      <ul>
        <li>location: {location.pathname}</li>
      </ul>
    </div>
  );
};
```

### useParams

hooks，获取 `params` 对象。 `params` 对象为动态路由（例如：`/users/:id`）里的参数键值对。

```tsx | pure
import { useParams } from 'umi';

export default () => {
  const params = useParams();
  return (
    <div>
      <ul>
        <li>params: {JSON.stringify(params)}</li>
      </ul>
    </div>
  );
};
```

### useRouteMatch

获取当前路由的匹配信息。

```tsx | pure
import { useRouteMatch } from 'umi';

export default () => {
  const match = useRouteMatch();
  return (
    <div>
      <ul>
        <li>match: {JSON.stringify(match.params)}</li>
      </ul>
    </div>
  );
};
```
