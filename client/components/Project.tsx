'use client';

import React, { useEffect, useState } from 'react';

export default function Projects() {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchProject = async () => {
			try {
				const data = await fetch(`http://localhost:3000/api/projects`);
				const { docs } = await data.json();
				setData(docs);
			} catch (error) {
				console.log(error);
				setData([])
			}
		}

		fetchProject();
	}, [])


	return (
		<div>
			<ol>
				{data.map((item: any) => (
					<li key={item.id}>
						<b>{item.title}</b>
					</li>
				))}
			</ol>
		</div>
	);
}