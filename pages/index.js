import Head from 'next/head'
import Container from '../components/Container'
import BoosterPicker from '../components/BoosterPicker'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Jetboost Booster Select</title>
				<meta
					name='description'
					content='New UI for selecting Boosters in the Create New Booster modal.'
				/>
				<link rel='icon' href='/jb-favicon.ico' />
			</Head>

			<main>
				<Container>
					<h2>Select a Booster:</h2>
					<hr />
					<BoosterPicker />
				</Container>
			</main>
		</div>
	)
}
