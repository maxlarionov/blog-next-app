import { Box, Typography } from "@mui/material"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"
import MainContainer from "../../components/MainContainer"

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
const ArticleImg = styled(Box)`
	width: 630px;
	height: 300px;
	border-radius: 20px;
	overflow: hidden;
`
const ArticleTitle = styled(Typography)`
	font-family: 'Montserrat', sans-serif;
	font-size: 24px;
	font-weight: 500;
	margin: 20px 0px 10px 0px;
`
const ArticleDate = styled(Box)`
	color: #707070;
	font-size: 12px;
`
const ArticleText = styled(Box)`
	margin: 20px 0px;
`
const ArticleFooter = styled(Box)`
	margin: 50px 0px;
	width: 100%;
	text-align: center;
`

const Article = ({ post }) => {
	return (
		<MainContainer title={`${post.id} | Blog of Max`}>
			<Head>
				<meta name="description" content="Articles about main projacts of Max Larionov" />
			</Head>

			<MainBody>
				<MainHeader>
					<Title>Articles/{post.id}</Title>
					<Box>
						<Link href={'/about'}>
							<a>
								Link
							</a>
						</Link>
					</Box>
				</MainHeader>

				<Box>
					<ArticleImg>
						<Image
							src='https://i.ibb.co/gdhrr8J/coding.jpg'
							alt='Coding'
							width='620px'
							height='300px'
						/>
					</ArticleImg>
					<ArticleTitle>
						{post.title}
					</ArticleTitle>
					<ArticleDate>
						03.03.2003
					</ArticleDate>
					<ArticleText>
						{post.body}
					</ArticleText>
				</Box>

				<ArticleFooter>
					<Link href={'/articles'}>
						<a>
							Back to all Articles
						</a>
					</Link>
				</ArticleFooter>
			</MainBody>
		</MainContainer>
	)
}

export default Article

export async function getStaticPaths() {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts')
	const posts = await response.json()

	const paths = posts.map((post) => ({
		params: { id: post.id.toString() },
	}))

	return {
		paths,
		fallback: false
	}
}

export async function getStaticProps(context) {
	const { params } = context
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
	const post = await response.json()
	return {
		props: {
			post
		},
	}
}