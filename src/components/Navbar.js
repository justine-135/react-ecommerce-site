import React, { useState } from "react";
import { ReactComponent as Cart } from "../icons/shopping-cart.svg";
import Header from "./Header";

const Navbar = (props) => {
	const [open, setOpen] = useState(false);

	return (
		<div className="navbar">
			<ul>
				<li>
					<Header></Header>
				</li>
				<li>
					<button className="cart-btn" onClick={() => setOpen(!open)}>
						<h6>{props.counter}</h6>
						{<Cart></Cart>}
					</button>
					{open && props.children}
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
