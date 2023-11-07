import { useState } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

import type Product from '../types/Product';
import filterProducts from '../utils/filterProducts';

type FilterableProductTableProps = {
	products: Product[];
};

export default function FilterableProductTable({ products }: FilterableProductTableProps) {
	const [filterText, setFilterText] = useState<string>('');
	const [inStockOnly, setInStockOnly] = useState<boolean>(false);

	const handleChange = () => {
		setInStockOnly(!inStockOnly);
	};

	const filteredProducts = filterProducts(products, { filterText, inStockOnly });

	return (
		<div>
			{/*
				<Greeting name='world'/>
				<Image src='/images/cat.jpg' alt='' width='400' />
				<p>Hello, {name}!</p>
				<p>Count, {count}!</p>
				<button type='button' onClick={handleClick}>클릭!</button>
			*/}
			<div>
				<SearchBar
					filterText={filterText}
					setFilterText={setFilterText}
					inStockOnly={inStockOnly}
					setInStockOnly={handleChange}
				/>
				<ProductTable products={filteredProducts} />
			</div>
		</div>
	);
}
