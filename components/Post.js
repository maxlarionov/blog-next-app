import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"

const PostWrap = styled(Box)`
	display: flex;
	background-color: white;
	border-radius: 20px;
	overflow: hidden;
	margin-bottom: 20px;
	background-color: white;
`
const PostImg = styled(Box)`
	width: 240px;
	height: 160px;
	border-radius: 20px;
	overflow: hidden;
`
const PostBody = styled(Box)`
	display: flex;
	flex-direction: column;
	flex: 1 1 340px;
	margin: 16px;
	color: black;
`
const PostTitle = styled(Box)`
	font-family: 'Montserrat', sans-serif;
	font-weight: 500;
	font-size: 20px;
`
const PostText = styled(Box)`
	font-family: 'Montserrat', sans-serif;
	font-weight: 400;
	font-size: 14px;
	margin-top: 10px;
	flex: 1 1 auto;
`
const PostBottom = styled(Box)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-family: 'Montserrat', sans-serif;
	font-size: 14px;
	font-weight: 500;
`
const Tags = styled(Box)`
	display: flex;
	font-size: 12px;
`
const Tag = styled(Box)`
	background-color: #D9D9D9;
	margin-right: 4px;
	padding: 4px 8px;
	border-radius: 20px;
`
const ReadMore = styled(Box)`
	text-decoration: underline;
`

const Post = ({ id, title, description, lang }) => {
	return (
		<PostWrap>
			<PostImg>
				<Image
					src='https://i.ibb.co/gdhrr8J/coding.jpg'
					alt='Coding'
					width='240px'
					height='160px'
				/>
			</PostImg>
			<PostBody>
				<PostTitle>
					{title}
				</PostTitle>
				<PostText>
					{description}
				</PostText>
				<PostBottom>
					<Tags>
						<Tag>Next.js</Tag>
						<Tag>Redux</Tag>
						<Tag>Firebase</Tag>
					</Tags>
					<ReadMore>
						<Link href={`/articles/${id}`}>
							<a>{lang === 'en' ? 'Read more' : 'Читати'}</a>
						</Link>
					</ReadMore>
				</PostBottom>
			</PostBody>
		</PostWrap>
	)
}

export default Post