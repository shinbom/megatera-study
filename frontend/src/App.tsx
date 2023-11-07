import { useState } from 'react';
// Import Greeting from './components/Greeting';
import type Product from './types/Product';
import FilterableProductTable from './components/FilterableProductTable';

type AppProps = {
	name?: string;
};

function Image({ src, alt = '', width }: {
	src: string;
	alt?: string;
	width?: string;
}) {
	return (
		<img src={src} alt={alt} width={width ?? 'auto'} />
	);
}

export default function App({ products }: {
	products: Product;
}) {
	const [count, setCount] = useState(0);

	const handleClick = () => {
		setCount(count + 1);
	};

	return (
		<>
			<div>
				<h1>상품</h1>
			</div>
			<FilterableProductTable products={products} />
		</>
	);
}
