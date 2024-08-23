import React from 'react';
import { postAPI } from '../../services/PostService';
import PostItem from './PostItem';
import classes from './Post.module.css';

const PostList2 = () => {
	const { data: posts, error, isLoading } = postAPI.useFetchAllUsersQuery(100);

	return (
		<div className={classes.post__list}>
			{isLoading && <h1>Загрузка...</h1>}
			{error && <h1>Произошла ошибка при загрузке</h1>}
			{/* {posts?.map((post) => (
				<PostItem key={post.id} post={post} />
			))} */}
		</div>
	);
};

export default PostList2;
