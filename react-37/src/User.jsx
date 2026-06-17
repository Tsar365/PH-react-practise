import { use } from 'react';

export default function User({ fetchsss }) {
	const users = use(fetchsss);

	console.log(users);

	return (
		<div className="card">
			<h3>Users: {users.length}</h3>
		</div>
	);
}
