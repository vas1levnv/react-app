import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import CustomButton from "../UI/CustomButton/CustomButton";
import Comments from "../Comments/Comments";

const PostItem = () => {
	const {id} = useParams()
	const [post, setPost] = useState()
	const [error, setError] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const fetchPostData = async() => {
		try {
			setIsLoading(true)
			const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
			setPost(response.data)
		} catch(e) {
			setError(e.message)
		} finally {
			setIsLoading(false)
		}
	}
	
	const handleClick = () => {
		console.log('asfasf')
	}
	
	useEffect(() => {
		fetchPostData()
	}, [])
	
	return (
		<div>
			{post
				? <div>
					<div>{post.title}</div>
					<div>{post.body}</div>
				</div>
				: <div>Нет поста</div>}
			<CustomButton onClick={handleClick}>click here!</CustomButton>
			<Comments/>
		</div>
	);
};

export default PostItem;