import ReactDOM from 'react-dom/client';
import App from './App';
import React from 'react';

function Demo({ count }: {
	count: number;
}) {
	return (
		<p>DEMO {count}</p>
	);
}

async function main(): void {
	const url = 'http://localhost:3000/products';
	const response = await fetch(url);
	const data = await response?.json();
	const { products } = data;

	const element = document.getElementById('app');
	if (!element) {
		return;
	}

	const count = 0;

	const root = ReactDOM.createRoot(element);
	// Const root2 = ReactDOM.createRoot(element2);
	root.render(
		<React.StrictMode>
			<App products={products} />
		</React.StrictMode>,
	);

	// SetInterval(() => {
	// 	count += 1;
	// 	root2.render(<Demo count={count}/>);
	// }, 1_000);
}

main();
