import type Product from '../types/Product';

export default function ProductRow({ product }: { product: Product }) {
	return (
		<tr>
			<td>
				<span style={{
					color: product.stocked ? '#000' : '#F00',
				}}
				>
					{product.name}
				</span>
			</td>
			<td>{product.price}</td>
		</tr>
	);
}
