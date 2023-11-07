import { useRef } from 'react';

type CheckBoxFiledProps = {
	label: string;
	inStockOnly: boolean;
	setInStockOnly: (value: boolean) => void;
};

export default function CheckBoxFiled({ label, inStockOnly, setInStockOnly }: CheckBoxFiledProps) {
	const id = useRef(`checkbox-${label.replace(/ /g, '-').toLowerCase()}`);

	return (
		<div>
			<input
				type='checkbox'
				id={id.current}
				checked={inStockOnly}
				onChange={setInStockOnly}
			/>
			<label htmlFor={id.current}>{label}</label>
		</div>
	);
}
