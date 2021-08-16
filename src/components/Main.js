import React, { useEffect } from "react";
import Cards from "./Cards";

const Main = (props) => {
	useEffect(() => {
		getProducts();
		//eslint-disable-next-line react-hooks/exhaustive-deps
		//react - hooks / exhaustive - deps;
	}, []);

	const getProducts = async () => {
		const abort = new AbortController();

		try {
			let item = await fetch("https://fakestoreapi.com/products", {
				signal: abort.signal,
			});
			let data = await item.json();
			props.setProducts(data);
		} catch (e) {
			if (e === "AbortError") {
				console.log("fetched error");
			}
		}

		return () => abort.abort();
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
						<Cards
							key={product.id}
							product={product}
							cartItems={props.cartItems}
							setCartItems={props.setCartItems}
						/>
					))}
				</div>
			</section>
		</main>
	);
};

export default Main;
