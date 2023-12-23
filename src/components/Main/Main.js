import React from 'react';
import logo from "../../logo.svg";
import s from './Main.module.scss'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Posts from "../Posts";

const Main = () => {
	return (
		<main className={s.main}>
			<div className="container">
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="posts" element={<Posts/>}/>
				</Routes>
			</div>
		</main>
	);
};

export default Main;