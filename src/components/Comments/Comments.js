import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import s from './Comments.module.scss'

const Comments = () => {
	
	const {id} = useParams()
	
	const [comments, setComments] = useState([])
	const [error, setError] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	
	const fetchComments = async() => {
		try {
			setIsLoading(true)
			const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`,)
			await new Promise((resolve, reject) => setTimeout(resolve, 500))
			setComments(response.data)
		} catch(e) {
			setError(e.message)
		} finally {
			setIsLoading(false)
		}
	}
	
	useEffect(() => {
		fetchComments()
	}, [])
	
	return (
		<div className={s.commentsList}>
			{error
				? <div className="error">{error}</div>
				: isLoading
					? <div>Идет загрузка...</div>
					: comments.map(el => <div key={el.id}>
						<div>{el.id}</div>
						<div>{el.name}</div>
						<div>{el.email}</div>
						<div>{el.body}</div>
					</div>)
			}
		</div>
	);
};

export default Comments;