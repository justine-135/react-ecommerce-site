import React, { useState, useEffect } from "react";
import { ReactComponent as Cart } from "../icons/shopping-cart.svg";
import { ReactComponent as Left } from "../icons/chevron-left-solid.svg";
import { Link } from "react-router-dom";

import CartDiv from "./CartDiv";

const Product = ({
	match,
	cartItems,
	setCartItems,

	open,
	setOpen,
}) => {
	const [loading, setLoading] = useState(true);
	const [show, setShow] = useState(false);
	const [product, setProduct] = useState([]);

	useEffect(() => {
		getProduct();
	}, []);

	const getProduct = async () => {
		let item = await fetch(
			`https://fakestoreapi.com/products/${match.params.id}`
		);
		let data = await item.json();
		setProduct(data);
		setLoading(false);
		setShow(true);
	};

	const addToCartHandler = (item) => {
		const exist = cartItems.find((x) => x.id === item.id);
		if (!exist) {
			setCartItems([
				...cartItems,
				{
					item: item.category,
					price: item.price,
					image: item.image,
					id: item.id,
					quantity: 1,
				},
			]);
		}
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

					<li>
						<button className="cart-btn" onClick={() => setOpen(!open)}>
							<h6>{cartItems.length}</h6>
							{<Cart></Cart>}
						</button>
						{open && (
							<CartDiv cartItems={cartItems} setCartItems={setCartItems} />
						)}
					</li>
				</ul>
			</div>
			{loading && <div className="loading">Loading</div>}
			{show && (
				<div className="product-div">
					<div className="product-details" key={product.id}>
						<div
							className="product-img"
							style={{ backgroundImage: "url(" + product.image + ")" }}
						></div>
						<div className="product-detail">
							<h6 className="product-name">{product.title}</h6>
							<p className="product-description">{product.description}</p>
							<h6 className="product-price">$ {product.price}</h6>
							<button
								className="add-to-cart-product"
								onClick={() => addToCartHandler(product)}
							>
								add to cart
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Product;
