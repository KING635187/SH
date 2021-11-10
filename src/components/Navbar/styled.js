import styled from "styled-components";

export const StyledComponent = styled.div`
  width: 100%;
  position: fixed;
  z-index: 2;
`;

export const StyledLogo = styled.h2`
  font-family: Blanka;
  font-size: 36px;
  line-height: 43px;
  color: #2ac7bd;
  padding-top: 12px;
  display: inline-block;
  position: absolute;
  right: 0;
  margin-right: 20px;

  @media (max-width: 1360px) {
    font-size: 28px;
    padding-top: 6px;
  }
`;

export const StyledMusic = styled.button`
  font-family: Blanka;
  color: #2ac7bd;
  margin-right: 164px;
  position: absolute;
  right: 0;
  margin-top: 30px;
  border: none;
  background-color: rgb(0, 0, 0);

  @media (max-width: 1360px) {
    font-size: 10px;
    margin-top: 20px;
  }
`;
