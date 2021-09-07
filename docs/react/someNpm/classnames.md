---
sidebar_position: 1
---

# classnames

你可以这样安装`classnames`

```shell
yarn add classnames

# or

npm install classnames
```

:::caution
注意，此处是`classnames`，而不是`classname`，这是两个不同的包
:::

然后引入

```js
const classNames = require('classnames')
```

**最简单的用法**

:ocean:把多个字符串合并

```js
classNames('foo', 'bar'); //=> 'foo 'bar'
```

**多种表达式类型**

:rainbow:即使是一团糟的表达式，也能转成css类，当然，我希望你的代码不出现像下面那样不规范的类：

```js
classNames(1, 'one', false, 'two') //=> '1 one two'
classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1'
```

**以及各种自由的组合**

```js
classNames('foo', { bar: true }); // => 'foo bar'
classNames({ 'foo-bar': true }); // => 'foo-bar'
classNames({ 'foo-bar': false }); // => ''
classNames({ foo: true }, { bar: true }); // => 'foo bar'
```

**嵌套的结构会被打平**

```js
classNames('a', ['b', {c:true, d:false}]) //=> 'a b c
```

**数组也是合法的**

:heavy_check_mark:支持多种结构，这非常灵活：

```js
classNames(['box','flex','big'],{ justifCenter:false, red:true} //=> 'box flex red')
classNames('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 'foo bar baz quux'
```


:::info
交换二者的位置也是可以的
```js
classNames({box:false, big:true },['box','flex','big']) //=> 'flex big'
```
:::


**实战:first_place_medal:**

```js title="选自Ant-Design源码"
import classNames = require('classnames')
import React from 'react'

export class Box extends React.Componenet {
    constuctor() {
        const {
        prefixCls: customizePrefixCls,
        type = 'horizontal',
        orientation = 'center',
        className,
        children,
        dashed,
        plain,
        ...restProps
      } = props;
            const classString = classNames(className, prefixCls, `${prefixCls}-${type}`, {
                [`${prefixCls}-with-text`]: hasChildren,
                [`${prefixCls}-with-text${orientationPrefix}`]: hasChildren,
                [`${prefixCls}-dashed`]: !!dashed,
                [`${prefixCls}-plain`]: !!plain,
                [`${prefixCls}-rtl`]: direction === 'rtl',
        });
    }
}
```