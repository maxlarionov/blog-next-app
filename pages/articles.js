import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import Head from "next/head"
import Link from "next/link"
import { useEffect, useState } from "react"
import styled from "styled-components"
import MainContainer from "../components/MainContainer"
import Post from "../components/Post"

const MainBody = styled(Box)`
padding: 20px;
max-width: 660px;
`
const MainHeader = styled(Box)`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;
`
const Title = styled(Typography)`
font-family: 'Montserrat', sans-serif;
font-weight: 700;
font-size: 24px;
`

const articles = ({ posts }) => {
	// const [posts, setPosts] = useState([])

	// useEffect(() => {
	// 	const load = async () => {
	// 		const response = await fetch('https://jsonplaceholder.typicode.com/posts')
	// 		const json = await response.json()
	// 		console.log(JSON.stringify(json))
	// 		setPosts(json)
	// 	}

	// 	load()
	// }, [])

	return (
		<MainContainer title={'Articles | Max Larionov'}>
			<Head>
				<meta name="description" content="Articles about main projacts of Max Larionov" />
			</Head>

			<MainBody>
				<MainHeader>
					<Title>Articles/</Title>
					<Box>
						<Link href={'/about'}>
							<a>
								Link
							</a>
						</Link>
					</Box>
				</MainHeader>
				<Box>
					{posts.map(post => (
						<Post key={post.id} id={post.id} title={post.title} />
					))}
					<Post />
				</Box>
			</MainBody>
		</MainContainer>
	)
}

export default articles

export async function getStaticProps(context) {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts')
	const posts = await response.json()
	return {
		props: {
			posts
		}, // will be passed to the page component as props
	}
}
