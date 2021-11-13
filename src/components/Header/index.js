import {
  StyledHeading,
  StyledHeading2,
  StyledHeading3,
  StyledHeading4,
  StyledHeading5,
  StyledHeading6,
} from "./styled";
import Container from "../Container";

const Header = () => {
  return (
    <Container>
      <StyledHeading>Hello my </StyledHeading>
      <StyledHeading2>name is </StyledHeading2>
      <StyledHeading3>Shakhboz. </StyledHeading3>
      <StyledHeading4>I’m a Front-</StyledHeading4>
      <StyledHeading5>end </StyledHeading5>
      <StyledHeading6>developer</StyledHeading6>
    </Container>
  );
};

export default Header;
