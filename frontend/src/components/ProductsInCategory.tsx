import CategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
import selectProducts from '../utils/selectProducts';

import type Product from '../types/Product';

type ProductInCategoryProps = {
	category: string;
	products: Product[];
};

export default function ProductInCategory({
	category, products,
}: ProductInCategoryProps) {
	const productsInCategory = selectProducts(products, category);

	return (
		<>
			<CategoryRow category={category} />
			{
				productsInCategory.map(product =>
					<ProductRow key={product.name} product={product} />,
				)
			}
		</>
	);
}
