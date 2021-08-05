import React, { useState, useEffect } from "react";

const Product = ({ match, cartItems, setCartItems, setCount }) => {
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
				},
			]);
			setCount((currCount) => currCount + 1);
		}
	};
	return (
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
	);
};

export default Product;
