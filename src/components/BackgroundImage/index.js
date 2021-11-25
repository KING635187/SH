import { Wrapper, Center, Line, Path } from './styled'

const BackgroundImage = () => {
	return (
		<Wrapper>
			<Center>
				<Path rotateZ="0deg" toRight={0}>
					<Line delay={0.3}></Line>
					<Line delay={2}></Line>
					<Line delay={4}></Line>
				</Path>
				<Path rotateZ="-15deg" toRight={20}>
					<Line delay={1}></Line>
				</Path>
				<Path rotateZ="-25deg" toRight={30}>
					<Line delay={0.2}></Line>
				</Path>
				<Path rotateZ="-30deg" toRight={80}>
					<Line delay={2}></Line>
				</Path>
				<Path rotateZ="-45deg" toRight={120}>
					<Line delay={0.6}></Line>
				</Path>
				<Path rotateZ="-60deg" toRight={180}>
					<Line delay={1.5}></Line>
				</Path>
			</Center>
		</Wrapper>
	)
}

export default BackgroundImage
