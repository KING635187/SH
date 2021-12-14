import {
	StyledComponent,
	StyledHeading,
	StyledText,
} from './styled'
import Container from '../Container'

const Header = () => {
	return (
		<Container>
			<StyledComponent>
				<StyledHeading>
					<StyledText delay={0} >Hi.</StyledText>
				</StyledHeading>
				<StyledHeading>
					<StyledText delay={0.4} >I’m Shakhboz.</StyledText>
				</StyledHeading>
				<StyledHeading>
					<StyledText delay={0.8} >Front-end</StyledText>
				</StyledHeading>
				<StyledHeading>
					<StyledText delay={1.2} >developer</StyledText>
				</StyledHeading>
			</StyledComponent>
		</Container>
	)
}

export default Header
