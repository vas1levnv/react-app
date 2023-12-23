import React, {useEffect, useState} from 'react';
import axios from "axios";
import s from './Posts.module.scss'

const Posts = () => {
	
	const [posts, setPosts] = useState([])
	const [error, setError] = useState(null)
	
	const fetchPosts = async() => {
		try {
			const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
			await new Promise((resolve) => setTimeout(resolve, 2000))
			setPosts(response.data)
		} catch(e) {
			setError(e.message)
		}
		
	}
	
	useEffect(() => {
		fetchPosts()
	});
	
	return (
		<div className={s.posts}>
			{error
				?
				<div className="error">{error}</div>
				: <div className={s.postsList}>
					{posts.map(el => <div key={el.id} className={s.postsItem}>
						<div className={s.postsItemTitle}>{el.title}</div>
						<div>{el.body}</div>
					</div>)}
				</div>}
		
		</div>
	);
};

export default Posts;