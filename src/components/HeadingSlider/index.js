import { Heading, Text } from './styled'

const HeadingSlider = ({ title }) => {
	let text = []
	let i = 0
	while (i < 10) {
		text.push(title)
		i++
	}

	return (
		<Heading>
			{text.map((item, index) => (
				<Text delay={index}>{item}</Text>
			))}
		</Heading>
	)
}

export default HeadingSlider
