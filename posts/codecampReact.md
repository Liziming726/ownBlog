---
title: Freecodecamp React
date: 2023-02-01
tags: [文章分享]
cover: ""
top_img: false
categories: [文章分享]
---

> 将 Props 传递给无状态函数组件

```js
const CurrentDate = (props) => {
  return (
    <div>
      { /* 修改这行下面的代码 */ }
      <p>The current date is: {props.date}</p>
      { /* 修改这行上面的代码 */ }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* 修改这行下面的代码 */ }
        <CurrentDate date={Date()}/>
        { /* 修改这行上面的代码 */ }
      </div>
    );
  }
};
```

---

> 写一个简单的计数器

```js
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // 修改这行下面的代码
    this.increment = this.increment.bind(this);
  this.decrement = this.decrement.bind(this);
  this.reset = this.reset.bind(this);
    // 修改这行上面的代码
  }
  // 修改这行下面的代码
  increment(){
    this.setState(state => ({
      count:state.count + 1
    }))
  }
  decrement(){
    this.setState(state => ({
      count:state.count - 1 
    }))
  }
  reset(){
    this.setState({
      count:0
    })
  }
  // 修改这行上面的代码
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};
```

---

> 1. 创建一个可以控制的输入框

```js
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // Change code below this line
    this.handleChange = this.handleChange.bind(this);
    // Change code above this line
  }
  // Change code below this line
  handleChange (event) {
    this.setState({
      input: event.target.value
    })
  }
  // Change code above this line
  render() {
    return (
      <div>
        { /* Change code below this line */}
        <input value={this.state.input} onChange={this.handleChange} />
        { /* Change code above this line */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }

};
```
> 2. 创建一个可以控制的表单
```js
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault()
    this.setState({
      submit: this.state.input
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.input}
            onChange={this.handleChange} />
          <button type='submit'>Submit!</button>
        </form>
        <h1>{this.state.submit}</h1>
      </div>
    );
  }
};
```

---

> 将 State 作为 Props 传递给子组件

```js

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         {/* 修改这行下面的代码 */}
         <Navbar name={this.state.name}/>
         {/* 修改这行上面的代码 */}
       </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      {/* 修改这行下面的代码 */}
      <h1>Hello, my name is: {this.props.name}</h1>
      {/* 修改这行上面的代码 */}
    </div>
    );
  }
};
```

---

> 传递回调作为 Props

可以将 state 作为 props 传递给子组件，但不仅限于传递数据。 也可以将函数或在 React 组件中定义的任何方法传递给子组件。 这就是子组件与父组件交互的方式。 可以把方法像普通 prop 一样传递给子组件， 它会被分配一个名字，可以在子组件中的 this.props 下访问该方法的名字。

代码编辑器中列出了三个组件。 MyApp 是父组件，GetInput 和RenderInput 是它将要渲染的子组件。 将 GetInput 组件添加到 MyApp 的 render 方法，然后将 MyApp 的 state 中的 inputValue 传入名为 input 的 prop。 还要创建一个名为 handleChange 的 prop，并将输入处理程序 handleChange 传递给它。

接下来，将 RenderInput 添加到 MyApp 中的 render 方法中，然后创建一个名为 input 的 prop，并将 state 中的 inputValue 传递给它。 完成后，可以在 GetInput 组件中的 input 字段中键入内容，然后该组件通过 props 调用其父组件中的处理函数方法。 这将更新处于父组件 state 中的 input，该 input 将作为 props 传递给两个子组件。 观察数据如何在组件之间流动，以及单一数据源如何保持父组件state。 诚然，这个示例有点做作，但是应该能用来说明数据和回调是如何在 React 组件之间传递的。

```js
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
        { /* 修改这行下面的代码 */ }
        <GetInput inputVaule={this.state.inputValue} handleChange={this.handleChange}/>
        <RenderInput input={this.state.inputValue} />
        { /* 修改这行上面的代码 */ }
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};
```

---

> 使用生命周期方法：componentDidMount

某些时候，大多数 web 开发人员需要调用 API 接口来获取数据。 如果正在使用 React，知道在哪里执行这个动作是很重要的。

React 的最佳实践是在生命周期方法 componentDidMount() 中对服务器进行 API 调用或任何其它调用。 将组件装载到 DOM 后会调用此方法。 此处对 setState() 的任何调用都将触发组件的重新渲染。 在此方法中调用 API 并用 API​​ 返回的数据设置 state 时，一旦收到数据，它将自动触发更新。

componentDidMount() 中有一个模拟 API 调用。 它在 2.5 秒后设置 state，以模拟调用服务器检索数据。 本示例请求站点的当前活动用户总数。 在 render 方法中，把 activeUsers 渲染到文字 Active Users: 后的 h1 标签中。 观看预览中发生的事情，随意更改超时时间以查看不同的效果。

```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        {/* 修改这行下面的代码 */}
        <h1>Active Users: {this.state.activeUsers}</h1>
        {/* 修改这行上面的代码 */}
      </div>
    );
  }
}
```

---

> 添加事件侦听器

componentDidMount() 方法也是添加特定功能所需的任何事件监听器的最佳位置。 React 提供了一个合成事件系统，它封装了浏览器中的事件系统。 这意味着，不管用户用的是什么浏览器，合成事件系统的行为都完全相同 -- 即使不同浏览器之间的本地事件的行为可能不同。

之前已经接触了一些合成事件处理程序，如onClick()。 React 的合成事件系统非常适合用于在 DOM 元素上管理的大多数交互。 但是，如果要将事件处理程序附加到 document 或 window 对象，则必须直接执行此操作。

在 componentDidMount() 方法中为 keydown 事件添加事件监听器，并让这些事件触发回调 handleKeyPress()。 可以使用 document.addEventListener()，它将事件（用引号括起来）作为第一个参数，将回调作为第二个参数。

然后，在 componentWillUnmount() 中移除相同的事件监听器。 可以把相同的参数传递给 document.removeEventListener()。 在卸载和销毁 React 组件之前，最好在这个生命周期方法中对它们进行清理。 移除事件监听器就是这样一个清理操作的例子。

```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // 修改这行下面的代码
  componentDidMount() {
    document.addEventListener('keydown',this.handleKeyPress)
  }
  componentWillUnmount() {
    document.removeEventListener('keydown',this.handleKeyPress)
  }
  // 修改这行上面的代码
  handleEnter() {
    this.setState((state) => ({
      message: state.message + 'You pressed the enter key! '
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};
```

---

> 给同级元素一个唯一的键属性

上一个挑战展示了如何使用 map 方法根据用户输入动态渲染多个元素。 然而，这个例子中缺少一个重要的部分。 创建元素数组时，每个元素都需要一个设置为唯一值的 key 属性。 React 使用这些键来跟踪哪些项目被添加、更改或删除。 这有助于在以任何方式修改列表时提高重新渲染过程的效率。

注意： 键只需要在兄弟元素之间是唯一的，它们不需要在应用程序中是全局唯一的。

代码编辑器有一个数组，它包含一些前端框架和一个名为 Frameworks() 的无状态函数组件。 Frameworks() 需要将数组映射到无序列表，就像上一个挑战一样。 完成 map 回调，为 frontEndFrameworks 数组中的每个框架返回一个 li 元素。 这次，确保给每个 li 的 key 属性设置一个唯一的值。 li 元素还应该包含来自 frontEndFrameworks 的文本。

通常，希望使 key 能唯一标识要渲染的元素。 数组索引可以是最后的选择，但通常你应该尝试使用唯一标识。

```js
const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];

function Frameworks() {
  const renderFrameworks = frontEndFrameworks.map((item) =>
  <li key={item}>{item}</li>); // 修改这一行
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks}
      </ul>
    </div>
  );
};
```

---

> 使用 Array.Filter() 动态过滤数组

map 数组方法是一个强大的工具，在使用 React 时经常使用。 与 map 相关的另一种方法是 filter，它根据条件过滤数组的内容，然后返回一个新数组。 例如，如果有一个 users 数组，每个数组元素都有一个可以设置为 true 或 false 的 online 属性，可以这样只过滤那些在线的用户：

let onlineUsers = users.filter(user => user.online);
在代码编辑器中，MyComponent 的 state 被初始化为一个用户数组。 有些用户在线，有些则没有。 过滤数组，以便只查看在线用户。 要执行此操作，请首先使用 filter 返回仅包含 online 属性为 true 的用户的新数组。 然后，在 renderOnline 变量中，映射已过滤的数组，并为包含其 username 文本的每个用户返回 li 元素。 确保包含一个唯一的 key ，就像上一个挑战一样。

```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
      ]
    };
  }
  render() {
    const usersOnline = this.state.users.filter(user => user.online); // 修改这一行
    const renderOnline = usersOnline.map(user => <li key={user.username}>{user.username}</li>); // 修改这一行
    return (
      <div>
        <h1>Current Online Users:</h1>
        <ul>{renderOnline}</ul>
      </div>
    );
  }
}
```
