import { Box, Container, Drawer, Typography } from '@mui/material'
import Head from 'next/head'
import React, { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const MainBox = styled(Container)`
	max-width: 960px;
	display: flex;
`
const Sidebar = styled(Box)`
	background-color: white;
	padding: 0px 10px;
`
const SidebarTop = styled(Box)`
	display: flex;
	align-items: center;
	gap: 10px;
	width: 180px;
	margin: 10px 0px;
`
const PersonPhoto = styled(Box)`
	width: 60px;
	height: 60px;
	border-radius: 50%;
	overflow: hidden;
`
const PersonName = styled(Box)`
	font-family: 'Montserrat', sans-serif;
	font-size: 16px;
`
const SidebarBottom = styled(Box)`
	font-family: 'Montserrat', sans-serif;
	display: flex;
	flex-direction: column;
	gap: 10px;
	font-size: 14px;
`
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
const Article = styled(Box)`
	display: flex;
	background-color: white;
	border-radius: 20px;
	overflow: hidden;
`
const ArticleImg = styled(Box)`
	width: 240px;
	height: 160px;
	border-radius: 20px;
	overflow: hidden;
`
const ArticleBody = styled(Box)`
	display: flex;
	flex-direction: column;
	flex: 1 1 340px; // ????
	margin: 20px;
`
const ArticleTitle = styled(Typography)`
	font-family: 'Montserrat', sans-serif;
	font-weight: 500;
	font-size: 20px;
`
const ArticleText = styled(Typography)`
	font-family: 'Montserrat', sans-serif;
	font-weight: 400;
	font-size: 14px;
`
const ArticleBottom = styled(Box)`
	display: flex;
	justify-content: space-between;
	font-family: 'Montserrat', sans-serif;
	font-size: 14px;
`

const MainContainer = ({ children, keywords, title }) => {

	return (
		<MainBox>
			<Head>
				<title>{title}</title>
				<meta keywords={'max, it, nextjs' + keywords} />
			</Head>

			<Sidebar>
				<SidebarTop>
					<PersonPhoto>
						<Image
							src='https://i.ibb.co/TB7TxrM/myphoto.png'
							alt='Max'
							width='60px'
							height='60px'
						/>
					</PersonPhoto>
					<PersonName>
						<Box>
							Max
						</Box>
						<Box>
							Larionov
						</Box>
					</PersonName>
				</SidebarTop>
				<SidebarBottom>
					<Box>
						All articles: 4
					</Box>
					<Box>
						All reactions: 58
					</Box>
					<Link href={'/'}>
						<a>
							About me
						</a>
					</Link>
				</SidebarBottom>
			</Sidebar>


			<MainBody>
				<MainHeader>
					<Title>Articles/</Title>
					<Box>Search</Box>
				</MainHeader>
				<Box>
					<Article>
						<ArticleImg>
							<Image
								src='https://i.ibb.co/gdhrr8J/coding.jpg'
								alt='Coding'
								width='240px'
								height='160px'
							/>
						</ArticleImg>
						<ArticleBody>
							<ArticleTitle>
								JavaScript Frameworks
							</ArticleTitle>
							<ArticleText>
								No JavaScript frameworks were created during the writing of this article. The following is inspired by the article “It’s the future...
							</ArticleText>
							<ArticleBottom>
								<Box>28.05.2022</Box>
								<Box>Read more</Box>
							</ArticleBottom>
						</ArticleBody>
					</Article>
				</Box>
			</MainBody>
		</MainBox>
	)
}

export default MainContainer