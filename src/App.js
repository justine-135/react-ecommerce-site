import React, { useState } from "react";
import Main from "./components/Main";
import CartDiv from "./components/CartDiv";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import ViewCart from "./components/ViewCart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
	const [cartItems, setCartItems] = useState([]);
	const [products, setProducts] = useState([]);
	const [open, setOpen] = useState(false);

	return (
		<Router>
			<div>
				<Switch>
					<Route path="/" exact>
						<Navbar cartItems={cartItems} setOpen={setOpen} open={open}>
							<CartDiv
								cartItems={cartItems}
								setCartItems={setCartItems}
							></CartDiv>
						</Navbar>

						<Main
							cartItems={cartItems}
							setCartItems={setCartItems}
							products={products}
							setProducts={setProducts}
						/>
					</Route>
					<Route path="/cart">
						<ViewCart cartItems={cartItems} setCartItems={setCartItems} />
					</Route>
					<Route
						exact
						path="/:id"
						render={(props) => (
							<Product
								{...props}
								cartItems={cartItems}
								setCartItems={setCartItems}
								open={open}
								setOpen={setOpen}
							></Product>
						)}
					/>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
