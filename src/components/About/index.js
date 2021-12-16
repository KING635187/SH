import { Styledp1, Styledp2, Styleddiv } from './styled'
import Container from '../Container'
import HeadingSlider from '../HeadingSlider'

const About = () => {
	return (
		<>
			<HeadingSlider text="about me" gap={80} />
			<Container>
				<Styleddiv>
					<Styledp1>H</Styledp1>
					<Styledp2>
						ello everyone, my name is Shahboz, I am 15 years old and
						I am a front-end developer. I have been studying
						programming since I was 14 years old and I will create a
						site for you in HTML, CSS, Javascrept and React.{' '}
					</Styledp2>
				</Styleddiv>
			</Container>
		</>
	)
}

export default About
