import Container from "../Container";
import {
  StyledContent,
  StyledBox,
  StyledBox2,
  StyledBox3,
  StyledBox4,
  StyledContent2,
} from "./styled";

import Slidercopy from "../Slidercopy";

const Progect = () => {
  return (
    <Container>
      <Slidercopy />
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
