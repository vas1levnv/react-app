import React, {useEffect, useState} from 'react';
import axios from "axios";
import s from './Posts.module.scss'
import {Link} from "react-router-dom";

const Posts = () => {
	
	const [posts, setPosts] = useState([])
	const [error, setError] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const fetchPosts = async() => {
		try {
			setIsLoading(true)
			const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
				params: {
					_limit: 9
				}
			})
			await new Promise((resolve) => setTimeout(resolve, 500))
			setPosts(response.data)
		} catch(e) {
			setError(e.message)
		} finally {
			setIsLoading(false)
		}
	}
	
	useEffect(() => {
		fetchPosts()
	}, []);
	
	return (
		<div className={s.posts}>
			{error
				? <div className="error">{error}</div>
				: isLoading
					? <div className="error">Идет загрузка...</div>
					: <div className={s.postsList}>
						{posts.map(el => <Link to={'' + el.id} key={el.id} className={s.postsItem}>
							<div className={s.postsItemTitle}>{el.title}</div>
							<div>{el.body}</div>
						</Link>)}
					</div>}
		</div>
	);
};

export default Posts;