import { useState } from 'react';

type TextFiledProps = {
	filterText: string;
	placeholder: string;
	setFilterText: (value: string) => void;
};

export default function TextFiled({ filterText, placeholder, setFilterText }: TextFiledProps) {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		console.log(value);
		setFilterText(value);
	};

	return (
		<div >
			<input
				type='text'
				placeholder={placeholder}
				value={filterText}
				onChange={handleChange}
			/>
		</div >
	);
}
