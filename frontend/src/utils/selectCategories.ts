import type Product from '../types/Product';

export default function selectCategories(Products: Product[]): string[] {
	return Products.reduce((acc: string[], product: Product) => {
		const { category } = product;
		return acc.includes(product.category) ? acc : [...acc, product.category];
	}, []);
}
