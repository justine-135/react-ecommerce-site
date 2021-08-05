import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="logo">
			<Link to="/" className="home-link">
				<h6 className="logo-name">Fake Store.js</h6>
			</Link>
		</header>
	);
};

export default Header;
