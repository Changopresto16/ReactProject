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
						The Cut
					</a>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul id="names" className="navbar-nav">
							<li className="nav-item">
								<Link className="nav-link1 active"  to="/">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link2" to="/contact">
									Contact
								</Link>
							</li>
							{this.props.user.username ?
								<>
									<li className="nav-item" onClick={this.props.logMeOut}>
										<Link className="nav-link3" to="/login">Log Out</Link>
									</li>
								</>
								:
								<>
									<li className="nav-item">
										<Link className="nav-link4" to="/login">Login</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link5" to="/signup">Sign Up</Link>
									</li>
								</>
							}
							<li className="nav-item">
								<Link className="nav-link6" to="/Todo">
									Todo
								</Link>
							</li>

							<li className="nav-item">
								<Link className="nav-link7" to="/shop">Shop</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link8" to="/cart">{this.props.cart.length} | {this.getSubTotal()}</Link>
							</li>
						</ul>

						<li className="nav-item-name">
							<p className="nav-link9">Hello: {this.props.user.username}</p>
						</li>
					</div>
				</div>
			</nav>
		);
	}
}
