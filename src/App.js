import React, { useState } from "react";
import Main from "./components/Main";
import CartDiv from "./components/CartDiv";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
	const [count, setCount] = useState(0);
	const [cartItems, setCartItems] = useState([]);
	const [products, setProducts] = useState([]);

	return (
		<Router>
			<div>
				<Navbar cartItems={cartItems} counter={count}>
					<CartDiv
						cartItems={cartItems}
						setCartItems={setCartItems}
						count={count}
						setCount={setCount}
					></CartDiv>
				</Navbar>
				<Switch>
					<Route path="/" exact>
						<Main
							cartItems={cartItems}
							setCartItems={setCartItems}
							count={count}
							setCount={setCount}
							products={products}
							setProducts={setProducts}
						/>
					</Route>
					<Route
						path="/item/:id"
						render={(props) => (
							<Product
								{...props}
								cartItems={cartItems}
								setCartItems={setCartItems}
								count={count}
								setCount={setCount}
							/>
						)}
					/>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
