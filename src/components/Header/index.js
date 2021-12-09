import {
	StyledComponent,
	StyledHeading,
	StyledHeading2,
	StyledHeading3,
	StyledHeading4,
	StyledText,
} from './styled'
import Container from '../Container'

const Header = () => {
	return (
		<Container>
			<StyledComponent>
				<StyledHeading>
					<StyledText>Hi. 	</StyledText>
				</StyledHeading>
				<StyledHeading>
					<StyledHeading2>I’m Shakhboz. </StyledHeading2>
				</StyledHeading>
				<StyledHeading>
					<StyledHeading3>Front-end </StyledHeading3>
				</StyledHeading>
				<StyledHeading>
					<StyledHeading4>developer</StyledHeading4>
				</StyledHeading>
			</StyledComponent>
		</Container>
	)
}

export default Header
