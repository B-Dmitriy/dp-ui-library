import React from 'react';

const App = () => {

	const arr = [1,2,3];

	return (
		<div>
			<ul>
				{arr.map((i) => {
					return <li key={i}>{i}</li>;
				})}
			</ul>
		</div>
	);
};

export default App;