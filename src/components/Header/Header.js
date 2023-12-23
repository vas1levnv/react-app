import React from 'react';
import s from './Header.module.scss'
import {Link} from "react-router-dom";

const Header = () => {
	return (
		<header className={s.header}>
			<div className="container">
				<ul className={s.headerList}>
					<Link to="/">Home</Link>
					<Link to="posts">Posts</Link>
				</ul>
			</div>
		</header>
	);
};

export default Header;