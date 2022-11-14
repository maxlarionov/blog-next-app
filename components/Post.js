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
margin: 20px;
color: black;
`
const PostTitle = styled(Typography)`
font-family: 'Montserrat', sans-serif;
font-weight: 500;
font-size: 20px;
`
const PostText = styled(Typography)`
font-family: 'Montserrat', sans-serif;
font-weight: 400;
font-size: 14px;
flex: 1 1 auto;
`
const PostBottom = styled(Box)`
display: flex;
justify-content: space-between;
font-family: 'Montserrat', sans-serif;
font-size: 14px;
`

const Post = ({ id, title, text }) => {
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
					{text}
				</PostText>
				<PostBottom>
					<Box>28.05.2022</Box>
					<Link href={`/article/${id}`}>
						<a>Read more</a>
					</Link>
				</PostBottom>
			</PostBody>
		</PostWrap>
	)
}

export default Post