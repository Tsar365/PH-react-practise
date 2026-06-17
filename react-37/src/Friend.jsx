import { use } from "react";

export default function Friend({friendsPromisesss}) {
  const friends=use(friendsPromisesss);
  console.log(friends);
	return (
		<div className="card">
			<h3>Friends: {friends.length}</h3>
		</div>
	);
}