import React, { FC } from 'react';
import { IPost } from '../../models/IPost';
import classes from './Post.module.css';

interface PostItemProps {
	post: IPost;
	remove: (post: IPost) => void;
	update: (post: IPost) => void;
}

const PostItem: FC<PostItemProps> = ({ post, remove, update }) => {
	const handleRemove = (event: React.MouseEvent) => {
		event.stopPropagation();
		remove(post);
	};

	const handleUpdate = (event: React.MouseEvent) => {
		const title = prompt() || '';
		update({ ...post, title });
	};

	return (
		<div className={classes.post} onClick={handleUpdate}>
			{post.id} - {post.title}
			<button
				onClick={handleRemove}
				style={{ width: '100px', marginLeft: '10px' }}
			>
				Удалить
			</button>
		</div>
	);
};

export default PostItem;
