import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import { collection, onSnapshot, query, where } from "firebase/firestore"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Head from "next/head"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import styled from "styled-components"
import MainContainer from "../components/MainContainer"
import Post from "../components/Post"
import { db } from "../utils/Firebase"


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

const Articles = () => {
	const { t } = useTranslation()

	const [articlesList, setArticlesList] = useState([])

	useEffect(() => {
		const articlesRef = collection(db, 'articles')
		const q = query(articlesRef, where('type', '==', 'text'))

		const unSub = onSnapshot(q, (querySnapshot) => {
			setArticlesList(querySnapshot.docs.map(doc => ({ ...doc.data() })))
		})

		return unSub
	}, [])

	return (
		<MainContainer title={'Articles | Max Larionov'}>
			<Head>
				<meta name="description" content="Articles about main projacts of Max Larionov" />
			</Head>

			<MainBody>
				<MainHeader>
					<Title>{t('articles:title')}: Articles/</Title>
					<Box>
						<Link href={'/about'}>
							<a>
								Link
							</a>
						</Link>
					</Box>
				</MainHeader>
				<Box>
					{articlesList.map(post => (
						<Post key={post.id} id={post.id} title={post.title} />
					))}
					<Post />
				</Box>
			</MainBody>
		</MainContainer>
	)
}

export default Articles

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['articles']))
		}, // will be passed to the page component as props
	}
}

