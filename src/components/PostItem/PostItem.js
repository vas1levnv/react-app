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
	const [isShowComment, setIsShowComment] = useState(false)
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
	
	useEffect(() => {
		fetchPostData()
	}, [])
	
	return (
		<div>
			{isLoading
				? <div>Идет загрузка...</div>
				: post
					? <div>
						<div>{post.title}</div>
						<div>{post.body}</div>
						{
							isShowComment
								? <Comments/>
								: <CustomButton onClick={() => setIsShowComment(true)}>Show comment</CustomButton>
						}
					</div>
					: <div className="error">{error}</div>
			}
		</div>
	);
};

export default PostItem;