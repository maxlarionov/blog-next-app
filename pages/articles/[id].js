import ThumbUp from "@mui/icons-material/ThumbUp"
import ThumbDown from "@mui/icons-material/ThumbDown"
import { Box, IconButton } from "@mui/material"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"
import MainContainer from "../../components/Sidebar"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { collection, doc, getDoc, getDocs } from "firebase/firestore"
import { db } from "../../utils/Firebase"
import { addDislike, addLike, getReactions } from "../../store/actions/article"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from "next-i18next"
import { loadArticle } from "../../lib/load-article"

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
const Title = styled(Box)`
	font-family: 'Montserrat', sans-serif;
	font-weight: 700;
	font-size: 24px;
`
const ArticleImg = styled(Box)`
	width: 620px;
	height: 300px;
	border-radius: 20px;
	overflow: hidden;
`
const ArticleTitle = styled(Box)`
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
const Reactions = styled(Box)`
	display: flex;
`
const Reaction = styled(Box)`
	display: flex;
	align-items: center;
	width: 70px;
`
const Like = styled(IconButton)`
	display: flex;
`
const Dislike = styled(IconButton)`
	display: flex;
`
const ArticleFooter = styled(Box)`
	margin: 50px 0px;
	width: 100%;
	text-align: center;
`

const Article = ({ articleProps, lang }) => {
	const article = JSON.parse(articleProps)
	const textEn = article.text
	const textUk = article.textUk
	const reactions = article.reactions
	const { t } = useTranslation()
	const activeLang = lang || en

	console.log(article)

	const dispatch = useDispatch()

	useEffect(() => {
		const reactionsPayload = {
			likes: reactions.likes,
			dislikes: reactions.dislikes
		}

		dispatch(getReactions(reactionsPayload))
	}, [])

	const likes = useSelector(state => state.likes.likes)
	const dislikes = useSelector(state => state.likes.dislikes)

	const articleRef = doc(db, 'articles', article.id)

	const addLikeReaction = () => {
		const setReactions = {
			'reactions.likes': +likes + 1
		}

		dispatch(addLike(articleRef, setReactions))
	}

	const addDislikeReaction = () => {
		const setReactions = {
			'reactions.dislikes': +dislikes + 1
		}

		dispatch(addDislike(articleRef, setReactions))
	}

	return (
		<MainContainer title={`${article.id} | Blog of Max`}>
			<Head>
				<meta name="description" content="Articles about main projacts of Max Larionov" />
			</Head>

			<MainBody>
				<MainHeader>
					<Title>{t('article:title')}: Articles/{article.title}</Title>
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
						{article.title}
					</ArticleTitle>
					<ArticleDate>
						{article.date}
					</ArticleDate>
					{activeLang === 'en' ? (
						textEn.map((p, index) => (
							<Box key={index}>
								{p.text &&
									<ArticleText>{p.text}</ArticleText>
								}
								{p.img &&
									<ArticleImg>
										<Image
											src={p.img}
											alt='Coding'
											width='620px'
											height='300px'
										/>
									</ArticleImg>
								}
							</Box>
						))) : (
						textUk.map((p, index) => (
							<Box key={index}>
								{p.text &&
									<ArticleText>{p.text}</ArticleText>
								}
								{p.img &&
									<ArticleImg>
										<Image
											src={p.img}
											alt='Coding'
											width='620px'
											height='300px'
										/>
									</ArticleImg>
								}
							</Box>
						)))
					}
					<ArticleText>
						{article.title}
					</ArticleText>
				</Box>

				<ArticleFooter>
					<Reactions>
						<Reaction>
							<Like onClick={addLikeReaction}>
								<ThumbUp sx={{ color: '#AF14D7' }} />
							</Like>
							{likes}
						</Reaction>
						<Reaction>
							<Dislike onClick={addDislikeReaction}>
								<ThumbDown />
							</Dislike>
							{dislikes}
						</Reaction>
					</Reactions>
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

export const getStaticPaths = async ({ locales }) => {
	const snapshot = await getDocs(collection(db, 'articles'))
	const paths = snapshot.docs
		.map(doc => locales.map((locale) => ({
			params: { id: doc.id.toString() },
			locale
		})))
		.flat()

	return {
		paths,
		fallback: true
	}
}

// export async function getStaticPaths() {
// 	const response = await fetch('https://jsonplaceholder.typicode.com/posts')
// 	const posts = await response.json()

// 	const paths = posts.map((post) => ({
// 		params: { id: post.id.toString() },
// 	}))

// 	return {
// 		paths,
// 		fallback: false
// 	}
// }

export const getStaticProps = async (context) => {
	const id = context.params.id
	const lang = context.locale
	// const articleProps = loadArticle(id)
	const docRef = doc(db, 'articles', id)
	const docSnap = await getDoc(docRef)
	const articleProps = JSON.stringify(docSnap.data())

	return {
		props: {
			// articleProps,
			articleProps: articleProps || null,
			...(await serverSideTranslations(lang, ['article'])),
			lang
		}
	}
}

// export async function getStaticProps(context) {
// 	const { params } = context
// 	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
// 	const post = await response.json()
// 	return {
// 		props: {
// 			post
// 		},
// 	}
// }