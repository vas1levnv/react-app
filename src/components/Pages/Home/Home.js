import React from 'react';
import logo from "../../../logo.svg";
import s from './Home.module.scss'

const Home = () => {
	return (
		<div className={s.home}>
			<img src={logo} className="App-logo" alt="logo"/>
		</div>
	);
};

export default Home;