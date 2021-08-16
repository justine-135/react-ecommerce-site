const CartItems = (props) => {
	const deleteHandler = (item) => {
		props.setCartItems(props.cartItems.filter((el) => el.id !== item.id));
	};

	return (
		<div className="cart-items">
			<div
				className="cart-item-img"
				style={{ backgroundImage: "url(" + props.items.image + ")" }}
			></div>
			<div className="cart-item-name-price">
				<h6 className="cart-item-name">{props.items.item}</h6>
				<h6 className="cart-item-price">${props.items.price}</h6>
			</div>

			<button className="remove" onClick={() => deleteHandler(props.items)}>
				remove
			</button>
		</div>
	);
};

export default CartItems;
