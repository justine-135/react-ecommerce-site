import { ReactComponent as Left } from "../icons/chevron-left-solid.svg";
import { Link } from "react-router-dom";

const ViewCart = (props) => {
	const deleteHandler = (item) => {
		props.setCartItems(props.cartItems.filter((el) => el.id !== item.id));
	};
	const increaseHandler = (x) => {
		let newCart = [...props.cartItems];

		let exist = newCart.find((item) => item.id === x.id);
		if (exist) {
			exist.quantity++;
		} else {
			exist = {
				...props.cartItems,
				quantity: 1,
			};
			newCart.push(exist);
		}
		props.setCartItems(newCart);
	};

	const decreaseHandler = (x) => {
		let newCart = [...props.cartItems];

		let exist = newCart.find((item) => item.id === x.id);
		if (exist) {
			if (exist.quantity !== 1) {
				exist.quantity--;
			}
		} else {
			exist = {
				...props.cartItems,
				quantity: 1,
			};
			newCart.push(exist);
		}
		props.setCartItems(newCart);
	};

	const sumHandler = () => {
		return props.cartItems.reduce(
			(total, { price, quantity }) => total + price * quantity,
			0
		);
	};

	return (
		<div>
			<div className="navbar">
				<ul>
					<Link to="/" className="product-back-link">
						<li className="product-back">
							{<Left></Left>}
							<button>store</button>
						</li>
					</Link>
				</ul>
			</div>

			<div className="all-cart">
				<div className="cart-div-inside all-cart-inside">
					{props.cartItems.map((items) => (
						<div className="cart-items all-cart-items" key={items.id}>
							<div
								className="cart-item-img all-cart-img"
								style={{ backgroundImage: "url(" + items.image + ")" }}
							></div>
							<div className="cart-item-name-price all-cart-item-name">
								<h6 className="cart-item-name">{items.item}</h6>
								<h6 className="cart-item-price">${items.price}</h6>
							</div>
							<div className="quantities-btn">
								<button className="up" onClick={() => increaseHandler(items)}>
									up
								</button>
								<h6>{items.quantity}</h6>
								<button className="up" onClick={() => decreaseHandler(items)}>
									down
								</button>
							</div>
							<button className="remove" onClick={() => deleteHandler(items)}>
								remove
							</button>
						</div>
					))}
					<div className="checkout">
						<h6 className="total-price">Total price: ${sumHandler()}</h6>
						<button className="empty" onClick={() => props.setCartItems([])}>
							empty cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ViewCart;
