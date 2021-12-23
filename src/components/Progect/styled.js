import styled from "styled-components";

export const StyledContent = styled.div`
  display: flex;
  position: absolute;
  margin: auto;

  @media (max-width: 425px) {
    display: none;
  }
`;
export const StyledContent2 = styled.div`
  display: flex;
  margin-bottom: 300px;

  @media (max-width: 425px) {
    padding-bottom: 200px;
    display: contents;
  }
`;

export const StyledBox = styled.div`
  width: 628px;
  height: 647px;
  background: #00ADB5;
  z-index: 1;
  @media (max-width: 1360px) {
    width: 490px;
  }

  @media (max-width: 425px) {
    width: 360px;
    height: 400px;
  }
`;

export const StyledBox2 = styled.div`
  width: 628px;
  height: 464px;
  background: #00ADB5;
  margin-left: 24px;
  z-index: 1;
  @media (max-width: 1360px) {
    margin-left: 12px;
    width: 490px;
  }

  @media (max-width: 425px) {
    width: 360px;
    height: 400px;
  }
`;

export const StyledBox3 = styled.div`
  width: 628px;
  height: 464px;
  background: #00ADB5;
  margin-top: 671px;
  @media (max-width: 1360px) {
    margin-top: 659px;
  }

  

  @media (max-width: 425px) {
    width: 344px;
    height: 400px;
    margin-left: 0;
    margin-top: 0;
  }
`;

export const StyledBox4 = styled.div`
  width: 628px;
  height: 647px;
  background: #00ADB5;
  margin-top: 490px;
  margin-left: 24px;
  @media (max-width: 1360px) {
    margin-left: 12px;
    margin-top: 478px;
  }

  @media (max-width: 425px) {
    width: 344px;
    height: 400px;
    margin-left: 0;
    margin-top: 16px;
  }
`;
