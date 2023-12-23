import React from 'react';
import s from './Main.module.scss'
import {Route, Routes} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Posts from "../Pages/Posts/Posts";
import PostItem from "../PostItem/PostItem";

const Main = () => {
	return (
		<main className={s.main}>
			<div className="container">
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="posts" element={<Posts/>}/>
					<Route path="posts/:id" element={<PostItem/>}/>
				</Routes>
			</div>
		</main>
	);
};

export default Main;