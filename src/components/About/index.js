import { Styledp1, Styledp2, Styleddiv } from "./styled";
import Container from "../Container";
import Slider from "../Slider";

const About = () => {
  return (
    <Container>
      <Slider />
      <Styleddiv>
        <Styledp1>H</Styledp1>
        <Styledp2>
          ello everyone, my name is Shahboz, I am 15 years old and I am a
          front-end developer. I have been studying programming since I was 14
          years old and I will create a site for you in HTML, CSS, Javascrept and
          React.{" "}
        </Styledp2>
      </Styleddiv>
    </Container>
  );
};

export default About;
