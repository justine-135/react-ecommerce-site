import { ReactComponent as Cart } from "../icons/shopping-cart.svg";
import Header from "./Header";

const Navbar = (props) => {
	return (
		<div className="navbar">
			<ul>
				<li>
					<Header></Header>
				</li>

				<li>
					<button
						className="cart-btn"
						onClick={() => props.setOpen(!props.open)}
					>
						<h6>{props.cartItems.length}</h6>
						{<Cart></Cart>}
					</button>
					{props.open && props.children}
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
