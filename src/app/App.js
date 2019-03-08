import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Clock from '../component/ClockTest';
import ShowWarning from '../component/contions-if';
import NumberList from '../component/MapFor';
 
class App extends Component {
	render() {
		return (
		<div className="App">
			<div className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h2> <Clock /></h2>
				<ShowWarning/>
				<NumberList numbers={[1,2,3,4]}/>
			</div>
			<p className="App-intro">
				你可以在 <code>src/app/App.js</code> 文件中修改。
			</p>
		</div>
		);
	}
}
export default App;