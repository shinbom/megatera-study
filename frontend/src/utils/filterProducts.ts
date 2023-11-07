import type Product from '../types/Product';

type FilterConditions = {
	filterText: string;
	inStockOnly: boolean;
};

function normalize(text: string) {
	return text.trim().toLocaleLowerCase();
}

export default function filterProducts(
	products: Product[],
	{ filterText, inStockOnly }: FilterConditions,
): Product[] {
	const filteredProducts = products.filter(product => !inStockOnly || product.stocked);

	const query = filterText.trim().toLocaleLowerCase();
	if (!query) {
		return filteredProducts;
	}

	const contains = (product: Product) => (
		normalize(product.name).toLowerCase().includes(query)
	);

	return products.filter(contains);
}

