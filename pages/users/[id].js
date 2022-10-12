import { useRouter } from "next/router"
import MainContainer from "../../components/MainContainer"

export default function User({ user }) {
	const { query } = useRouter()

	return (
		<MainContainer title={`User ${user.id} - Blog IT`}>
			<h1>
				User {query.id}
			</h1>
			<p>
				Name - {user.name}
			</p>
		</MainContainer>
	)
}

export async function getServerSideProps({ params }) {
	const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
	const user = await response.json()

	return {
		props: { user }, // will be passed to the page component as props
	}
}