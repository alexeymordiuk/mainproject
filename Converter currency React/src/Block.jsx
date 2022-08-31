import React from 'react'

const defaulCurrens = ['UAH', 'USD', 'EUR', 'GBP'];


export const Block = ({value, currency, onChangeValue, onChangeCurrency}) => (
	<div className='block'>
		<h1 className='block__title'>Converted</h1>
		<ul className='currencies'>
			{defaulCurrens.map((cur) => (
			<li
				onClick={() => onChangeCurrency(cur)}
				className={currency === cur ? 'active' : ''}
				key={cur}>
					{cur}
			</li>
			))}
		</ul>
		<input
		onChange={(e) => onChangeValue(e.target.value)}
		value={value}
		type="number" 
		placeholder={0}
		/>
	</div>
)


export default Block