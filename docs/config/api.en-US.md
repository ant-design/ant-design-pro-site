---
title: API
order: 2
nav:
  title: Config
  path: /config
  order: 2
---

> Check [umi documentation](https://umijs.org/zh-CN/api) for more configuration

## history

Can be used to obtain current routing information,

```tsx | pure
import { history } from 'umi';

// The number of entities in the history stack
console.log(history.length);

// The action of the current history jump has three types: PUSH, REPLACE and POP
console.log(history.action);

// location object, including pathname, search and hash
console.log(history.location.pathname);
console.log(history.location.search);
console.log(history.location.hash);
```

Can be used for routing jumps,

```tsx | pure
import { history } from 'umi';

// Jump to the specified route
history.push('/list');

// Jump to the specified route with parameters
history.push('/list?a=b');
history.push({
  pathname: '/list',
  query: {
    a: 'b',
  },
});

// Jump to the previous route
history.goBack();
```

It can also be used for routing monitoring,

```tsx | pure
import { history } from 'umi';

const unlisten = history.listen((location, action) => {
  console.log(location.pathname);
});
unlisten();
```

## Link

Link components, for example:

```tsx | pure
import { Link } from 'umi';

export default () => {
  return (
    <div>
      {/* Click to jump to the specified /about route */}
      <Link to="/about">About</Link>

      {/* Click to jump to the specified /courses route,
         With query {sort:'name'}
     */}
      <Link to="/courses?sort=name">Courses</Link>

      {/* Click to jump to the specified /list route,
         With query: {sort:'name'}
         With hash:'the-hash'
         With state: {fromDashboard: true}
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

      {/* Click to jump to the specified /profile route,
         With all the parameters on the current location
     */}
      <Link
        to={(location) => {
          return { ...location, pathname: '/profile' };
        }}
      />

      {/* Click to jump to the specified /courses route,
         But it will replace the records in the current history stack
     */}
      <Link to="/courses" replace />

      {/*
         innerRef allows you to get the basic components (here should be a tag or null)
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

Special version of `<Link />`. When the specified route (`to=specified route`) hits, a specific pattern can be attached.

```tsx | pure
import { NavLink } from 'umi';

export default () => {
  return (
    <div>
      {/* Equivalent to Link */}
      <NavLink to="/about">About</NavLink>

      {/* When the current route is /faq, attach class selected */}
      <NavLink to="/faq" activeClassName="selected">
        FAQs
      </NavLink>

      {/* When the current route is /faq, attach style */}
      <NavLink
        to="/faq"
        activeStyle={{
          fontWeight: 'bold',
          color: 'red',
        }}
      >
        FAQs
      </NavLink>

      {/* When the current route completely matches /profile, attach the class */}
      <NavLink exact to="/profile" activeClassName="selected">
        Profile
      </NavLink>

      {/* When the current route is /profile/, attach class */}
      <NavLink strict to="/profile/" activeClassName="selected">
        Profile
      </NavLink>

      {/* When the current route is /profile and query contains name, attach class */}
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

hooks, get the `history` object

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

hooks, get the `location` object

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

hooks, get the `params` object. The `params` object is the parameter key-value pair in the dynamic route (for example: `/users/:id`).

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

Get the matching information of the current route.

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
