import styled from "styled-components";

export const Styledp1 = styled.p`
  font-family: Blanka;
  font-style: normal;
  font-weight: normal;
  font-size: 96px;
  line-height: 170%;
  letter-spacing: 0.4em;
  color: #00FFF5;
  position: absolute;

  @media (max-width: 1360px) {
    font-size: 48px;
  }
`;

export const Styledp2 = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 170%;
  letter-spacing: 0.04em;
  color: #00ADB5;
  position: relative;
  text-indent: 80px;
  width: 963px;
  padding-top: 80px;
  padding-bottom: 320px;

  @media (max-width: 1360px) {
    font-size: 24px;
    width: 600px;
    text-indent: 40px;
    padding-top: 40px;
    padding-bottom: 200px;
  }

  @media (max-width: 425px) {
    width: 330px;
    font-size: 24px;
	}
`;

export const Styleddiv = styled.div`
  margin-top: 308px;
  margin-left: 160px;
  margin-bottom: 300px;

  @media (max-width: 425px) {
    margin-left: 20px;
    margin-top: 140px;
	}
`;
