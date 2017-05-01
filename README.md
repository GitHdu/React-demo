# 基于React的简易留言板

> A React.js project

## 小结

#### 组件间通信

###### 1. 父组件通过`props`传递数据给子组件

父组件`index.js`

```javascript
< MessageBoard title = "留言板" / >
```

子组件`messageBoard.js`通过`props`接收

```html
< h3 > { this.props.title } < /h3>
```

###### 2. 子组件通过接收父组件事件向父组件传递数据

父组件`messageBoard.js`：

```js
//父组件自定义事件onMessageSubmit
< MessageForm onMessageSubmit = { this.handleMessageSubmit.bind(this) } />//使函数this指针指向当前实例MessageForm
```

子组件`messageForm.js`：

```js
//子组件接收事件并向父组件传递参数
this.props.onMessageSubmit({
            name: name,
            message: message
        });
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:3000
npm start

```

参考来自[webpack和react实战](https://github.com/wangning0/Autumn_Ning_Blog/blob/master/blogs/3-21/react_webpack.md) 和 [React-Study](https://github.com/minooo/React-Study).
