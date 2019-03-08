import React, { Component } from 'react';
 
class Clock extends Component {
    constructor(props) {
        super(props);
		this.state = {date: new Date()};
    }
    componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
    }
    
    componentWillUnmount() {
      	clearInterval(this.timerID);
    }
    
    tick() {
		this.setState({
			date: new Date()
		});
    }
    render() {
		return (
			<div>
			<h1>Hello, world!</h1>
			<h2>现在是 {this.state.date.toLocaleTimeString()}.</h2>
			</div>
		);
    }
}

//绑定event事件
class LoggingButton extends Component {
	// 这个语法确保了 `this` 绑定在  handleClick 中
	// 这里只是一个测试
	handleClick = () => {
	  console.log('this is:', this);
	}
   
	render() {
	  return (
		<button onClick={this.handleClick}>
		  Click me
		</button>
	  );
	}
  }
export default Clock;