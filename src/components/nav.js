import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
	render() {
		return (
			<nav id="nav" className="navbar navbar-expand-lg bg-primary">
				<div className="container-fluid">
					<a className="navbar-brand" to="/">
						Michaels App
					</a>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link className="nav-link active" aria-current="page" to="/">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/contact">
									Contact
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/Todo">
									Todo
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/Login">
									Login
								</Link>
							</li>
							<li className="nav-item">
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
