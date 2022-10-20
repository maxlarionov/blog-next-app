import { Box } from "@mui/system"
import Router from "next/router"
import MainContainer from "../../components/MainContainer"

const About = () => {

	return (
		<MainContainer title={'About'}>
			<Box>
				<div>About me</div>
				<button onClick={() => Router.push('/')}>Back</button>
				<button onClick={() => Router.push('/articles')}>Read</button>
			</Box>
		</MainContainer>
	)
}

export default About