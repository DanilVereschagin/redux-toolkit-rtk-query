import { useEffect } from 'react';
import './App.css';
import { useAppSelector, useAppDispatch } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreators';
import PostList from './components/Post/PostList';
import PostList2 from './components/Post/PostList2';

function App() {
	const { users, isLoading, error } = useAppSelector(
		(state) => state.userReducer
	);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchUsers());
	}, []);

	return (
		<div className='App'>
			<h1>ReduxToolkit and RTK-Query</h1>
			<hr />
			<h1>Список пользователей</h1>
			{isLoading && <h1>Загрузка...</h1>}
			{error && <h1>{error}</h1>}
			{users.map((user) => (
				<div key={user.id}>
					{user.id} - {user.name}
				</div>
			))}
			<hr />
			<h1>Список постов</h1>
			<div style={{ display: 'flex' }}>
				<PostList />
				<PostList2 />
			</div>
		</div>
	);
}

export default App;
