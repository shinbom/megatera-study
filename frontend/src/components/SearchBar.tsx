import TextFiled from './TextFiled';
import CheckBoxFiled from './CheckBoxFiled';

type SearchBarProps = {
	filterText: string;
	setFilterText: (value: string) => void;
	inStockOnly: boolean;
	setInStockOnly: (value: boolean) => void;
};

export default function SearchBar({
	filterText,
	setFilterText,
	inStockOnly,
	setInStockOnly }: SearchBarProps) {
	return (
		<div className='search-bar'>
			<TextFiled placeholder='Search...' filterText={filterText} setFilterText={setFilterText} />
			<CheckBoxFiled
				label='Only show products in stock'
				inStockOnly={inStockOnly}
				setInStockOnly={setInStockOnly}
			/>
		</div>
	);
}
