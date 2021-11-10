import Container from "../Container";
import {
  Styledgmail,
  Styledcontent,
  Styledlink,
  Styledlink2,
  Styledlink3,
  StyledLinkContainer,
} from "./styled";

const Contact = () => {
  return (
    <Container>
      <Styledcontent>
        <Styledgmail href="mailto: shaxbozibragimbekov@gmail.com">
          shaxbozibragimbekov @gmail.com
        </Styledgmail>
      </Styledcontent>
      <StyledLinkContainer>
        <Styledlink href="https://t.me/Frontend_Developer_SH">telegram</Styledlink>
        <Styledlink2 href="#">facebook</Styledlink2>
      </StyledLinkContainer>
      <StyledLinkContainer>
        <Styledlink href="#">instagram</Styledlink>
        <Styledlink3 href="https://github.com/KING635187" target="_blank">git hub</Styledlink3>
      </StyledLinkContainer>
    </Container>
  );
};

export default Contact;
