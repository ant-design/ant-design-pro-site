---
order: 31
title: Lint
group:
  title: 质量
nav:
  title: 文档
  path: /docs
  order: 1
---

Pro 中一直有一套自己的 lint 的规则列表，默认模式比较严格，以下是一些常见的 lint 错误，以下是内置的一些错误。

- prettier
- eslint
- stylelint

## 📏 规则列表

本次更新不兼容规则共计 18 条，已有 102 个页面的项目为例，迁移时间大概在 2 个小时左右。如果是以前代码写的比较规范，速度可能更快。 以下列举了不能自动 fix 的所有规则说明，可以根据说明来进行修复。如果你需要某项规则，可以在 `.eslintrc.js` 中将规则配置为 0 或 1。

```tsx | pure
// 0 为关闭
// 1 会报错 warning
// 2 会报错 error，堵塞 ci 和 commit
'import/prefer-default-export': 0,
```

你也可以通过  `eslint-disable-next-line` 来忽略某些规则，尤其是写一些简单地部署脚本时。

```tsx | pure
// eslint-disable-next-line prefer-destructuring
packageName = packageName.match(/^_(@?[^@]+)/)![1];
```

#### [no-nested-ternary ](https://cn.eslint.org/docs/rules/no-nested-ternary)不支持 fix

禁止使用嵌套的三元表达式

```tsx | pure
// 🔴 错误的用法
var thing = foo ? bar : baz === qux ? quxx : foobar;

foo ? (baz === qux ? quxx() : foobar()) : bar();

// ✅ 正确的用法
var thing = foo ? bar : foobar;

var thing;

if (foo) {
  thing = bar;
} else if (baz === qux) {
  thing = quxx;
} else {
  thing = foobar;
}
```

#### [react/jsx-closing-tag-location ](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md)自动 fix

react 的标签开合应该对齐

```tsx | pure
// 🔴 错误的用法
<Hello>
  marklar
  </Hello>

// ✅ 正确的用法
<Hello>
  marklar
</Hello>
```

no-restricted-globals [react/no-access-state-in-setstate](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md)  不支持 fix 不要在 this.setState 中使用 this.state

```tsx | pure
// 🔴 错误的用法
setState({ value: this.state.value + 1 }); // 2
setState({ value: this.state.value + 1 }); // 2, 因为 setState 为异步所以还是 2 不是 3

// ✅ 正确的用法
this.setState((prevState) => ({ value: prevState.value + 1 }));
```

#### [consistent-return](https://github.com/eslint/eslint/blob/master/docs/rules/consistent-return.md)  不支持 fix

使用一致的返回，如果有返回值应该每个 return 都提供返回值

```tsx | pure
// 🔴 错误的用法
function doSomething(condition) {
  if (condition) {
    return true;
  } else {
    return;
  }
}

// ✅ 正确的用法
function doSomething(condition) {
  if (condition) {
    return true;
  } else {
    return false;
  }
}
```

#### [react/prefer-stateless-function](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md)  不支持 fix

如果没有使用 state 应该使用 react function

```tsx | pure
// 🔴 错误的用法
class Foo extends React.Component {
  render() {
    if (!this.props.foo) {
      return null;
    }
    return <div>{this.props.foo}</div>;
  }
}

// ✅ 正确的用法
const Foo = (props) => {
  if (!props.foo) {
    return null;
  }
  return <div>{props.foo}</div>;
};
```

#### [no-cond-assign](https://cn.eslint.org/docs/rules/no-cond-assign)  不支持 fix

禁止在条件语句中出现赋值操作符

```tsx | pure
// 🔴 错误的用法
var x;
if ((x = 0)) {
  var b = 1;
}

// ✅ 正确的用法
var x;
if (x === 0) {
  var b = 1;
}
```

#### [require-yield](https://cn.eslint.org/docs/rules/require-yield)  不支持 fix

禁用函数内没有`yield`的 generator 函数

```tsx | pure
// 🔴 错误的用法
function* foo() {
  return 10;
}

// ✅ 正确的用法
function* foo() {
  yield 5;
  return 10;
}
```

#### [prefer-destructuring](https://cn.eslint.org/docs/rules/prefer-destructuring) 部分支持 fix

优先使用数组和对象解构，这个规则只是 warning，不会阻碍提交，但是仍然推荐修复，使用解构赋值可以很方便的进行默认值的设置

```tsx | pure
// 🔴 错误的用法
var foo = array[0];
var foo = object.foo;
var foo = object['foo'];

// ✅ 正确的用法
var [foo] = array;
var foo = array[someIndex];

// With `object` enabled
var { foo } = object;

var foo = object.bar;
```

#### [react/destructuring-assignment](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md)  不支持 fix

尽量使用解构赋值从 props 中取值。这个规则只是 warning，不会阻碍提交，但是仍然推荐修复，使用解构赋值可以很方便的进行默认值的设置

```tsx | pure
// 🔴  错误的用法
const MyComponent = (props) => {
  return <div id={props.id} />;
};

// ✅ 正确的用法
const MyComponent = (props) => {
  const { id } = props;
  return <div id={id} />;
};
```

#### [comma-dangle](http://eslint.cn/docs/rules/comma-dangle) prettier 全部 fix

根据 ECMAScript5 (和 ECMAScript3!)规范，对象字面量中的拖尾逗号是合法的，拖尾逗号简化了对象和数组增加或删除元素，因为你只需接触你要修改的行。另一个支持拖尾逗号的观点是，当对象或数组添加或删除元素时，它提高了代码差异的清晰度。

```tsx | pure
var foo = {
  bar: 'baz',
  qux: 'quux',
};

foo({
  bar: 'baz',
  qux: 'quux',
});
```

#### [max-len](https://cn.eslint.org/docs/rules/max-len) 部分 fix

代码中非常长的行在任何语言中都很难阅读。为了提高可读性和可维护性，许多程序员制定了一项约定，来限制一行代码的字符数量(按照惯例 80 个字符)。

prettier 能部分修复，但是注释需要手工修复。url 会被忽略。

```tsx | pure
// 🔴  错误的用法
var foo = { bar: 'This is a bar.', baz: { qux: 'This is a qux' }, difficult: 'to read' };

// ✅ 正确的用法
var foo = {
  bar: 'This is a bar.',
  baz: { qux: 'This is a qux' },
  easier: 'to read',
};
```

#### [no-mixed-operators](https://cn.eslint.org/docs/rules/no-mixed-operators)  不支持 fix

封闭的复杂表达式使用括号括起来明确了开发者的意图，使代码更具可读性。当表达式中连续的不同的操作符没有使用括号括起来就会报错。

```tsx | pure
// 🔴  错误的用法
var foo = (a && b) || c || d;
var foo = (a && b < 0) || c > 0 || d + 1 === 0;
var foo = a + b * c;

// ✅ 正确的用法
var foo = (a && b) || c || d;
var foo = a || b || c;
var foo = a && b && c;
var foo = (a && b < 0) || c > 0 || d + 1 === 0;
var foo = a && (b < 0 || c > 0 || d + 1 === 0);
var foo = (a + b) * c;
```

#### [react/no-array-index-key](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md)  不支持 fix

不要使用 index 当 key，在 react 中使用 index 当 key 可能会造成一些问题，尤其是如果是希望改变列表的顺序，如果你使用了 index，或造成顺序更改后列表不更新的问题。但是在某些情况下 index 是必要使用的，例如动态输入列表。所以这个规则是 warning。

#### [@typescript-eslint/no-use-before-define](https://cn.eslint.org/docs/rules/no-use-before-define)  不支持 fix

#### [no-use-before-define](https://cn.eslint.org/docs/rules/no-use-before-define)   不支持 fix

不要在定义前使用，这个不用说了，会直接 error。

#### [no-param-reassign](http://eslint.cn/docs/2.0.0/rules/no-param-reassign) 不支持 fix

不要赋值函数的参数，可以显著的减少 magic code。

```tsx | pure
// 🔴 错误的用法
function foo(bar) {
  bar = 13;
}

function foo(bar) {
  bar++;
}

// ✅ 正确的用法
function foo(a) {
  var b = a;
  b++;
  return b;
}
```

#### [react-hooks/rules-of-hooks](https://zh-hans.reactjs.org/docs/hooks-rules.html)  部分支持 fix

只在最顶层使用 hooks 和   只在 React 函数中调用 Hook，这个规则可以避免很多低级错误，必备。

```tsx | pure
// 🔴 在条件语句中使用 Hook 违反第一条规则
if (name !== '') {
  useEffect(function persistForm() {
    localStorage.setItem('formData', name);
  });
}

// ✅ 正确的用法
useEffect(function persistForm() {
  if (name !== '') {
    localStorage.setItem('formData', name);
  }
});
```

#### [import/no-extraneous-dependencies](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md) 不支持 fix

不允许引入未在 dependencies 引入的依赖。为了保证测试等代码，允许在以下目录中使用  devDependencies 中的依赖

```tsx | pure
'**/tests/**.{ts,js,jsx,tsx}',
'**/_test_/**.{ts,js,jsx,tsx}',
'/mock/**/**.{ts,js,jsx,tsx}',
'**/**.test.{ts,js,jsx,tsx}',
'**/_mock.{ts,js,jsx,tsx}',
'**/example/**.{ts,js,jsx,tsx}',
'**/examples/**.{ts,js,jsx,tsx}',
```

#### [import/no-unresolved](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md)  不支持 fix

虽然在  dependencies 中存在但是  require.resolve 无法获得，此规则由 warning 变成 error。忽略了 `['^@/', '^@@/', '^@alipay/bigfish/']`，并且对大小写敏感。此规则可以显著的减少编译阶段的错误。

### 🌚 掩耳盗铃解决法

如果想继续使用宽松的 lint 规则，可以在 `.eslintrc.js` 中如下配置。

```tsx | pure
{
"extends": "@alipay/bigfish/softyEslint",
"rules": {
  // 你的自定义规则
  "no-nested-ternary": 0,
}
}
```
