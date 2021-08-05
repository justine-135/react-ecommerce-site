import React from "react";
import { Link } from "react-router-dom";

const CartDiv = (props) => {
	const deleteHandler = (item) => {
		props.setCartItems(props.cartItems.filter((el) => el.id !== item.id));
		props.setCount((currCount) => currCount - 1);
	};

	return (
		<div className="cart-div">
			<h6>Recently Added Items</h6>
			<div className="cart-div-inside">
				{props.cartItems.map((items) => (
					<div className="cart-items" key={items.id}>
						<div
							className="cart-item-img"
							style={{ backgroundImage: "url(" + items.image + ")" }}
						></div>
						<div className="cart-item-name-price">
							<h6 className="cart-item-name">{items.item}</h6>
							<h6 className="cart-item-price">{items.price} $</h6>
						</div>
						<button className="close" onClick={() => deleteHandler(items)}>
							close
						</button>
					</div>
				))}
			</div>
			<Link to="/item">
				<button className="view-cart">view cart</button>
			</Link>
		</div>
	);
};

export default CartDiv;
