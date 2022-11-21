import { AirlineSeatFlatAngled } from "@mui/icons-material"
import { Box } from "@mui/material"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { setSidebarLang } from "../store/actions/sidebar"

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
const SidebarCenter = styled(Box)`
	font-family: 'Montserrat', sans-serif;
	display: flex;
	flex-direction: column;
	gap: 10px;
	font-size: 14px;
`
const SidebarBottom = styled(Box)`
	font-family: 'Montserrat', sans-serif;
	display: flex;
	font-size: 14px;
	margin-top: 10px;
`



const MainContainer = ({ children, title }) => {
	const router = useRouter()
	const { locales, locale, pathname, query, asPath } = router
	const activeLocale = locale

	const otherLocales = (locales || []).filter(
		(locale) => locale !== activeLocale
	)

	const dispatch = useDispatch()

	const englishSidebar = { firstName: 'Max', lastName: 'Larionov', about: 'About me', articles: 'Articles' }
	const ukraineSidebar = { firstName: 'Макс', lastName: 'Ларіонов', about: 'Про мене', articles: 'Статті' }

	useEffect(() => {
		if (locale === 'en') {
			dispatch(setSidebarLang(englishSidebar))
		} else if (locale === 'uk') {
			dispatch(setSidebarLang(ukraineSidebar))
		}
	}, [locale])

	const sidebarText = useSelector(state => state.sidebar.sidebar)

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
									{sidebarText.firstName}
								</Box>
								<Box>
									{sidebarText.lastName}
								</Box>
							</a>
						</Link>
					</PersonName>
				</SidebarTop>
				<SidebarCenter>
					<Link href={'/about'}>
						<a>{sidebarText.about}</a>
					</Link>
					<Link href={'/articles'}>
						<a>{sidebarText.articles}</a>
					</Link>
				</SidebarCenter>
				<SidebarBottom>
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

