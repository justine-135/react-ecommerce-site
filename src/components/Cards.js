import { Link } from "react-router-dom";

const Cards = (props) => {
	const addToCart = (product) => {
		const exist = props.cartItems.find((item) => item.id === product.id);
		if (!exist) {
			props.setCartItems([
				...props.cartItems,
				{
					item: product.category,
					price: product.price,
					image: product.image,
					id: product.id,
					quantity: 1,
				},
			]);
		}
	};
	return (
		<div className="card-bg" key={props.product.id}>
			<div className="card">
				<div className="card-inside">
					<div
						className="card-top"
						style={{ backgroundImage: "url(" + props.product.image + ")" }}
					>
						<button
							className="add-to-cart"
							onClick={() => addToCart(props.product)}
						>
							add to cart
						</button>
					</div>
					<div className="card-bottom">
						<div className="card-name-price">
							<h6>{props.product.category}</h6>
							<h6>${props.product.price}</h6>
						</div>
						<p>{props.product.title}</p>
					</div>
					<Link to={`/${props.product.id}`}>
						<button className="see-more">See more</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Cards;
