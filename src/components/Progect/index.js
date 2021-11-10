import Container from "../Container";
import {
  StyledContent,
  StyledBox,
  StyledBox2,
  StyledBox3,
  StyledBox4,
  StyledContent2,
} from "./styled";

const Progect = () => {
  return (
    <Container>
      <StyledContent>
        <StyledBox></StyledBox>
        <StyledBox2></StyledBox2>
      </StyledContent>
      <StyledContent2>
        <StyledBox3></StyledBox3>
        <StyledBox4></StyledBox4>
        </StyledContent2>
    </Container>
  );
};

export default Progect;
