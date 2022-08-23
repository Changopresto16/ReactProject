import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./nav.css"

export default class Nav extends Component {
	render() {
		return (
			<nav id="nav" className="navbar navbar-expand-lg">
				<div className="container-fluid">
					<a className="navbar-brand" to="/">
						Michaels App
					</a>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul id="names" className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item1">
								<Link className="nav-link active" aria-current="page" to="/">
									Home
								</Link>
							</li>
							<li className="nav-item2">
								<Link className="nav-link" to="/contact">
									Contact
								</Link>
							</li>
							<li className="nav-item3">
								<Link className="nav-link" to="/Todo">
									Todo
								</Link>
							</li>
							<li className="nav-item4">
								<Link className="nav-link" to="/Login">
									Login
								</Link>
							</li>
							<li className="nav-item5">
								<Link className="nav-link" to="/SignUp">
									SignUp
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}
