import React from 'react';
import s from './CustomButton.module.scss'

const CustomButton = ({children, ...attr}) => {
	return (
		<button {...attr}>
			{children}
		</button>
	);
};

export default CustomButton;