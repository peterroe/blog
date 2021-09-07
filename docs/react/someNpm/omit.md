---
sidebar_position: 2
---

# omit.js

你可以这样安装`omit.js`

```shell
yarn add omit.js

#or

npm install omit.js
```

**基本用法**

:dolphin:用于排除不需要的属性：

```js
import omit from 'omit.js'

let props = {
    name: 'peter',
    age: 20,
    height: 178,
    isMan: false,
    hobby: ['run','basketball']
}

let afterprops = omit(props,['height','name']) 

consoel.log(props, afterprops, props == afterprops)
/*
{
    name: 'peter',
    age: 20,
    height: 178,
    isMan: false,
    hobby: [ 'run', 'basketball' ]
}

{ 
    age: 20, 
    isMan: false, 
    hobby: [ 'run', 'basketball' ]
} 

false  //=> 纯函数，并不影响props
*/
```

:raised_hand_with_fingers_splayed:**用法**

这通常用于当前组件向下传递过滤后的`props`，因为子节点并不一定需要所有的由祖先传来的`props`

:point_right:**过去**

你很可能会这样

```js
function MyComponent(props) {

    return (
        <Children {...props}>
            {
                //someDetails
            }
        </Children>
    )
}
```

:point_left:**现在**

你可以选择更加节省性能的方法，像这样：

```js
function MyComponent(props) {
    let newProps = omit(props,['one','two','three'])
    return (
        <Children {...newProps}>
            {
                //someDetails
            }
        </Children>
    )
}
```

:dart:**实战**

例如`Ant-Design`中使用的：

```js title="components/affix/index.tsx" {3,6,15}
import omit from 'omit.js'

let props = omit(this.props, ['prefixCls', 'offsetTop', 'offsetBottom', 'target', 'onChange']);
// Omit this since `onTestUpdatePosition` only works on test.
if (process.env.NODE_ENV === 'test') {
    props = omit(props, ['onTestUpdatePosition']);
}

return (
    <ResizeObserver
    onResize={() => {
        this.updatePosition();
    }}
    >
    <div {...props} ref={this.savePlaceholderNode}>
        {affixStyle && <div style={placeholderStyle} aria-hidden="true" />}
        <div className={className} ref={this.saveFixedNode} style={affixStyle}>
        <ResizeObserver
            onResize={() => {
            this.updatePosition();
            }}
        >
            {children}
        </ResizeObserver>
        </div>
    </div>
    </ResizeObserver>
);
```
