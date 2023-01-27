import { notFound } from 'next/navigation';
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Projects from '../components/Project';

const inter = Inter({ subsets: ['latin'] })


// const fetchProject = async () => {
// 	try {
// 		const data = await fetch(`http://payload:3000/api/projects`, {
// 			next: { revalidate: 60 }
// 		});
// 		const { docs } = await data.json();
// 		return docs;
// 	} catch (error) {
// 		console.log(error);
// 		return null;
// 	}
// }


export default async function Home() {

	// const data = await fetchProject();

	// if (!data) return notFound();

	return (
		<main className={`${styles.main} ${inter.className}`}>
			<h2>My app</h2>
			<hr />
			{/* <ol>
				{data.map((item: any) => (
					<li key={item.id}>
						<b>{item.title}</b>
					</li>
				))}
			</ol> */}
			<Projects />
		</main>
	)
}
