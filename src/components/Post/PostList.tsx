import React, { useEffect, useState } from 'react';
import { postAPI } from '../../services/PostService';
import PostItem from './PostItem';
import classes from './Post.module.css';
import { IPost } from '../../models/IPost';

const PostList = () => {
	const [limit, setLimit] = useState(100);
	const {
		data: posts,
		error,
		isLoading,
	} = postAPI.useFetchAllUsersQuery(limit);
	const [createPost, {}] = postAPI.useCreatePostMutation();
	const [deletePost, {}] = postAPI.useDeletePostMutation();
	const [updatePost, {}] = postAPI.useUpdatePostMutation();

	useEffect(() => {
		// setTimeout(() => {
		// 	setLimit(3);
		// }, 2000);
	}, []);

	const handleCreate = async () => {
		const title = prompt();
		await createPost({ title, body: title } as IPost);
	};

	const handleRemove = (post: IPost) => {
		deletePost(post);
	};

	const handleUpdate = (post: IPost) => {
		updatePost(post);
	};

	return (
		<div className={classes.post__list}>
			<button onClick={handleCreate}>Добавить новый пост</button>
			<p />
			{isLoading && <h1>Загрузка...</h1>}
			{error && <h1>Произошла ошибка при загрузке</h1>}
			{posts?.map((post) => (
				<PostItem
					key={post.id}
					remove={handleRemove}
					update={handleUpdate}
					post={post}
				/>
			))}
		</div>
	);
};

export default PostList;
