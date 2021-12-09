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
					<StyledText>Hi.</StyledText>
				</StyledHeading>
				<StyledHeading>
					<StyledText>I’m Shakhboz.</StyledText>
				</StyledHeading>
				<StyledHeading>
					<StyledText>Front-end</StyledText>
				</StyledHeading>
				<StyledHeading>
					<StyledText>developer</StyledText>
				</StyledHeading>
			</StyledComponent>
		</Container>
	)
}

export default Header
