import React from "react";
import { Link } from "react-router-dom";
import CartItems from "./CartItems";

const CartDiv = (props) => {
	return (
		<div className="cart-div">
			<h6>Recently Added Items</h6>
			<div className="cart-div-inside">
				{props.cartItems.map((items) => (
					<CartItems
						items={items}
						key={items.id}
						cartItems={props.cartItems}
						setCartItems={props.setCartItems}
					/>
				))}
			</div>
			<Link to="/cart">
				<button className="view-cart">view cart</button>
			</Link>
		</div>
	);
};

export default CartDiv;
