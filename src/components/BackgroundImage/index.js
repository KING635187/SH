import { Wrapper, Center, Line, Path } from './styled'

const BackgroundImage = () => {
	return (
		<Wrapper>
			<Center>
				<Path rotateZ="0deg" toRight={0}>
					<Line delay={0}></Line>
					<Line delay={5}></Line>
					<Line delay={10}></Line>
				</Path>
				<Path rotateZ="-12deg" toRight={20}>
					<Line delay={1}></Line>
					<Line delay={6}></Line>
					<Line delay={11}></Line>
				</Path>
				<Path rotateZ="-24deg" toRight={30}>
					<Line delay={0.2}></Line>
					<Line delay={5.2}></Line>
					<Line delay={10.2}></Line>
				</Path>
				<Path rotateZ="-36deg" toRight={80}>
					<Line delay={2}></Line>
					<Line delay={7}></Line>
					<Line delay={12}></Line>
				</Path>
				<Path rotateZ="-48deg" toRight={120}>
					<Line delay={0.6}></Line>
					<Line delay={5.6}></Line>
					<Line delay={10.6}></Line>
				</Path>
				<Path rotateZ="-60deg" toRight={180}>
					<Line delay={1.5}></Line>
					<Line delay={6.5}></Line>
					<Line delay={11.5}></Line>
				</Path>
			</Center>
		</Wrapper>
	)
}

export default BackgroundImage
