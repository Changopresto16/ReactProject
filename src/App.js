import React, { Component } from 'react';
import Nav from './components/nav';
import Home from './views/Home';
import Contact from './views/Contact';
import Third from './views/Third';
import News from './views/News';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './index.css';

export default class extends Component {
	constructor() {
		super();
		this.state = {
			posts: [],
			user: {},
			name: 'Michael',
			age: 9000,
		};
	}

	addToAge = () => {
		this.setState({age: this.state.age + 1})
	}

	render() {
		return (
			<div className="container">
				<BrowserRouter>
					<Nav />
					{this.state.name}
          <br/>
					{this.state.age}
          <br/>
          <br/>
					<button className="button" onClick={this.addToAge}>Happy Birthday</button>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/contact" element={<Contact />} />
            			<Route path="/third" element={<Third />} />
						<Route path="/news" element={<News />} />
					</Routes>
				</BrowserRouter>
			</div>
		);
	}
}
