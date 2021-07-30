---
order: 31
title: Lint
group:
  title: Quality
nav:
  title: Documents
  path: /docs
  order: 1
---

Pro has always had its own list of lint rules. The default mode is strict. The following are some common lint errors, and the following are some built-in errors.

- prettier
- eslint
- stylelint

## 📏 Rule list

In this update, there are 18 incompatible rules. The 102-page project is an example. The migration time is about 2 hours. If it is a more standardized code written before, it may be faster. The following is a list of all rules that cannot be automatically fixed, and can be repaired according to the instructions. If you need a rule, you can configure the rule as 0 or 1 in `.eslintrc.js`.

```tsx | pure
// 0 is off
// 1 will report an error warning
// 2 will report error, block ci and commit
'import / prefer-default-export': 0,
```

You can also use eslint-disable-next-line to ignore certain rules, especially when writing easy deployment scripts.

```tsx | pure
// eslint-disable-next-line prefer-destructuring
packageName = packageName.match(/ ^ _ (@? [^ @] +) /)![1];
```

#### [no-nested-ternary](https://cn.eslint.org/docs/rules/no-nested-ternary) does not support fix

Disallow nested ternary expressions

```tsx | pure
// 🔴 wrong usage
var thing = foo ? bar : baz === qux ? quxx : foobar;

foo ? (baz === qux ? quxx() : foobar()) : bar();

// ✅ correct usage
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

#### [react / jsx-closing-tag-location](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md) Automatic fix

React label opening and closing should be aligned

```tsx | pure
// 🔴 wrong usage
<Hello>
  marklar
  </Hello>

// ✅ correct usage
<Hello>
  marklar
</Hello>
```

no-restricted-globals [react / no-access-state-in-setstate] (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in -setstate.md) Does not support fix Do not use this.state in this.setState

```tsx | pure
// 🔴 wrong usage
setState({ value: this.state.value + 1 }); // 2
setState({ value: this.state.value + 1 }); // 2, because setState is asynchronous, so 2 is not 3

// ✅ correct usage
this.setState((prevState) => ({ value: prevState.value + 1 }));
```

#### [consistent-return](https://github.com/eslint/eslint/blob/master/docs/rules/consistent-return.md) does not support fix

Use consistent return, if there is a return value, each return should provide a return value

```tsx | pure
// 🔴 wrong usage
function doSomething(condition) {
  if (condition) {
    return true;
  } else {
    return;
  }
}

// ✅ correct usage
function doSomething(condition) {
  if (condition) {
    return true;
  } else {
    return false;
  }
}
```

#### [react / prefer-stateless-function](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md) fix is ​​not supported

If you don't use state, you should use react function

```tsx | pure
// 🔴 wrong usage
class Foo extends React.Component {
  render() {
    if (!this.props.foo) {
      return null;
    }
    return <div> {this.props.foo} </div>;
  }
}

// ✅ correct usage
const Foo = (props) => {
  if (!props.foo) {
    return null;
  }
  return <div> {props.foo} </div>;
};
```

#### [no-cond-assign](https://cn.eslint.org/docs/rules/no-cond-assign) does not support fix

Prohibit assignment operators in conditional statements

```tsx | pure
// 🔴 wrong usage
var x;
if ((x = 0)) {
  var b = 1;
}

// ✅ correct usage
var x;
if (x === 0) {
  var b = 1;
}
```

#### [require-yield](https://cn.eslint.org/docs/rules/require-yield) Fix is ​​not supported

Disable the generator function without `yield` in the function

```tsx | pure
// 🔴 wrong usage
function* foo() {
  return 10;
}

// ✅ correct usage
function* foo() {
  yield 5;
  return 10;
}
```

#### [prefer-destructuring](https://cn.eslint.org/docs/rules/prefer-destructuring) partial support fix

Prioritize the use of arrays and object destructuring. This rule is only warning and will not hinder the submission, but it is still recommended to fix. Using destructuring assignment can easily set the default value

```tsx | pure
// 🔴 wrong usage
var foo = array[0];
var foo = object.foo;
var foo = object['foo'];

// ✅ correct usage
var [foo] = array;
var foo = array[someIndex];

// With `object` enabled
var { foo } = object;

var foo = object.bar;
```

#### [react / destructuring-assignment](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md) fix is ​​not supported

Try to use destructuring assignment to get values ​​from props. This rule is only a warning, it will not hinder the submission, but it is still recommended to fix, using destructuring assignment can easily set the default value

```tsx | pure
// 🔴 wrong usage
const MyComponent = (props) => {
  return <div id={props.id} />;
};

// ✅ correct usage
const MyComponent = (props) => {
  const { id } = props;
  return <div id={id} />;
};
```

#### [comma-dangle](http://eslint.cn/docs/rules/comma-dangle) prettier all fix

According to the ECMAScript5 (and ECMAScript3!) Specifications, trailing commas in object literals are legal. Trailing commas simplify adding and deleting elements in objects and arrays, because you only need to touch the line you want to modify. Another point of view that supports trailing commas is that when objects or arrays add or remove elements, it improves the clarity of code differences.

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

#### [max-len](https://cn.eslint.org/docs/rules/max-len) part fix

Very long lines of code are difficult to read in any language. To improve readability and maintainability, many programmers have developed a convention to limit the number of characters in a line of code (80 characters by convention).

The prettier can be partially repaired, but the annotation needs to be repaired manually. url will be ignored.

```tsx | pure
// 🔴 wrong usage
var foo = { bar: 'This is a bar.', baz: { qux: 'This is a qux' }, difficult: 'to read' };

// ✅ correct usage
var foo = {
  bar: 'This is a bar.',
  baz: { qux: 'This is a qux' },
  easier: 'to read',
};
```

#### [no-mixed-operators](https://cn.eslint.org/docs/rules/no-mixed-operators) does not support fix

Enclosed complex expressions are enclosed in parentheses to clarify the developer's intention and make the code more readable. When consecutive different operators in an expression are not enclosed in parentheses, an error will be reported.

```tsx | pure
// 🔴 wrong usage
var foo = (a && b) || c || d;
var foo = (a && b < 0) || c > 0 || d + 1 === 0;
var foo = a + b * c;

// ✅ correct usage
var foo = (a && b) || c || d;
var foo = a || b || c;
var foo = a && b && c;
var foo = (a && b < 0) || c > 0 || d + 1 === 0;
var foo = a && (b < 0 || c > 0 || d + 1 === 0);
var foo = (a + b) * c;
```

#### [react / no-array-index-key](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md) Does not support fix

Don't use index as the key, use index as the key in react may cause some problems, especially if you want to change the order of the list, if you use index, or cause the problem that the list does not update after the order is changed. But in some cases index is necessary to use, such as dynamic input list. So this rule is warning.

#### [@ typescript-eslint / no-use-before-define](https://cn.eslint.org/docs/rules/no-use-before-define) Fix is ​​not supported

#### [no-use-before-define](https://cn.eslint.org/docs/rules/no-use-before-define) fix is ​​not supported

Don't use it before the definition, this needless to say, it will directly error.

#### [no-param-reassign](http://eslint.cn/docs/2.0.0/rules/no-param-reassign) does not support fix

Do not assign parameters to functions, you can significantly reduce the magic code.

```tsx | pure
// 🔴 wrong usage
function foo(bar) {
  bar = 13;
}

function foo(bar) {
  bar++;
}

// ✅ correct usage
function foo(a) {
  var b = a;
  b++;
  return b;
}
```

#### [react-hooks / rules-of-hooks](https://zh-hans.reactjs.org/docs/hooks-rules.html) Partial support fix

Only use hooks at the top level and only call hooks in React functions. This rule can avoid many low-level errors and is necessary.

```tsx | pure
// 🔴 Using Hook in a conditional statement violates the first rule
if (name! == '') {
  useEffect(function persistForm() {
    localStorage.setItem('formData', name);
  });
}

// ✅ correct usage
useEffect(function persistForm() {
  if (name! == '') {
    localStorage.setItem('formData', name);
  }
});
```

#### [import / no-extraneous-dependencies](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md) does not support fix

It is not allowed to introduce dependencies that are not introduced in dependencies. In order to ensure the code such as testing, it is allowed to use the dependencies in devDependencies in the following directory

```tsx | pure
'** / tests / **. {ts, js, jsx, tsx}',
'** / _ test _ / **. {ts, js, jsx, tsx}',
'/mock/**/**.{ts,js,jsx,tsx}',
'** / **. test. {ts, js, jsx, tsx}',
'** / _ mock. {ts, js, jsx, tsx}',
'** / example / **. {ts, js, jsx, tsx}',
'** / examples / **. {ts, js, jsx, tsx}',
```

#### [import / no-unresolved](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md) Fix is ​​not supported

Although it exists in dependencies, but require.resolve cannot be obtained, this rule changes from warning to error. Ignore `['^ @ /', '^ @@ /', '^ @ alipay / bigfish /']` and are case sensitive. This rule can significantly reduce errors during the compilation phase.

### 🌚 Solution

If you want to continue to use the loose lint rules, you can configure the following in `.eslintrc.js`.

```tsx | pure
{
  "extends": "@ alipay / bigfish / softyEslint",
  "rules": {
    // your custom rules
    "no-nested-ternary": 0,
  }
}
```
