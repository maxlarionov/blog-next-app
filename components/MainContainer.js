import { Box } from "@mui/material"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import styled from "styled-components"

const Wrapper = styled(Box)`
	max-width: 960px;
	margin: 0 auto;
	display: flex;
`
const SidebarContainer = styled(Box)`
	/* background-color: white; */
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

const MainContainer = ({ children, title }) => {
	const router = useRouter()
	const { locales, locale, pathname, query, asPath } = router
	const activeLocale = locale

	const otherLocales = (locales || []).filter(
		(locale) => locale !== activeLocale
	)

	return (
		<Wrapper>
			<Head>
				<title>{title}</title>
			</Head>

			<SidebarContainer>
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
						<Link href={'/'}>
							<a>
								<Box>
									{locale === 'en' ? 'EN' : 'UK'}
								</Box>
								<Box>
									Larionov
								</Box>
							</a>
						</Link>
					</PersonName>
				</SidebarTop>
				<SidebarBottom>
					<Box>
						All articles: 5
					</Box>
					<Box>
						All reactions: 58
					</Box>
					<Link href={'/about'}>
						<a>About me</a>
					</Link>
					<Link href={'/articles'}><a>Articles</a></Link>

					{otherLocales.map((locale) => {
						return (
							<Link
								key={locale}
								href={{ pathname, query }}
								as={asPath}
								locale={locale}
								legacyBehavior
							>
								{locale === 'en' ? 'English' : 'Українська'}
							</Link>
						)
					})}
				</SidebarBottom>
			</SidebarContainer>

			{children}

		</Wrapper>
	)
}

export default MainContainer