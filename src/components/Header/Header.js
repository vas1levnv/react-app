import React from 'react';
import s from './Header.module.scss'

const Header = () => {
	return (
		<header className={s.header}>
			<div className="container">
				<ul className={s.headerList}>
					<li><a href="/">Home</a></li>
					<li><a href="/">Posts</a></li>
				</ul>
			</div>
		</header>
	);
};

export default Header;