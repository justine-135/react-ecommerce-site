import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Main = (props) => {
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
				},
			]);
			props.setCount((currCount) => currCount + 1);
		}
	};

	useEffect(() => {
		getProducts();
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const getProducts = async () => {
		let item = await fetch("https://fakestoreapi.com/products");
		let data = await item.json();
		props.setProducts(data);
	};

	return (
		<main>
			<section className="card-wrapper">
				<div
					style={{
						display: "flex",
						width: "100%",
						flexWrap: "wrap",
						margin: "auto",
					}}
				>
					{props.products.map((product) => (
						<div className="card-bg" key={product.id}>
							<div className="card">
								<div className="card-inside">
									<div
										className="card-top"
										style={{ backgroundImage: "url(" + product.image + ")" }}
									>
										<button
											className="add-to-cart"
											onClick={() => addToCart(product)}
										>
											add to cart
										</button>
									</div>
									<div className="card-bottom">
										<div className="card-name-price">
											<h6>{product.category}</h6>
											<h6>{product.price} $</h6>
										</div>
										<p>{product.title}</p>
										<Link to={`item/${product.id}`}>
											<button className="see-more">See more</button>
										</Link>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		</main>
	);
};

export default Main;
