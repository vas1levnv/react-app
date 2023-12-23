import React from 'react';
import logo from "../../logo.svg";
import s from './Main.module.scss'

const Main = () => {
	return (
		<main className={s.main}>
			<div className="container">
				<img src={logo} className="App-logo" alt="logo"/>
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
			</div>
		</main>
	);
};

export default Main;