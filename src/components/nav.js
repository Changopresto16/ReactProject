import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./nav.css"

export default class Nav extends Component {
	getSubTotal = () => {
		let total = 0
		for (let item of this.props.cart) {
			total += parseFloat(item.price)
		}
		return total.toFixed(2)
	}


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
							{this.props.user.username ?
								<>
									<li className="nav-item" onClick={this.props.logMeOut}>
										<Link className="nav-link" to="/login">Log Out</Link>
									</li>
								</>
								:
								<>
									<li className="nav-item">
										<Link className="nav-link" to="/login">Login</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="/signup">Sign Up</Link>
									</li>
								</>
							}
							<li className="nav-item3">
								<Link className="nav-link" to="/Todo">
									Todo
								</Link>
							</li>

							<li className="nav-item">
								<Link className="nav-link" to="/shop">Shop</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/cart">{this.props.cart.length} | {this.getSubTotal()}</Link>
							</li>
						</ul>

						<li className="nav-item">
							<p className="nav-link">Hello, {this.props.user.username}</p>
						</li>
					</div>
				</div>
			</nav>
		);
	}
}
