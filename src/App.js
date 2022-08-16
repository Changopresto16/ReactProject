import React, { Component } from 'react';
import Nav from './nav';
import Home from './Home';
import Contact from './Contact';
import Third from './Third';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';

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
					<button class="button" onClick={this.addToAge}>Happy Birthday</button>

					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/contact" element={<Contact />} />
            			<Route path="/third" element={<Third />} />
            
					</Routes>
				</BrowserRouter>
			</div>
		);
	}
}
