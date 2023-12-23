import React from 'react';

const CustomButton = ({children, ...attr}) => {
	return (
		<button {...attr}>
			{children}
		</button>
	);
};

export default CustomButton;