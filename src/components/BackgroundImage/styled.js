import styled, { keyframes } from "styled-components";

const moveLeft = keyframes`
    from {
        x1: 1094;
        x1: 1157;
        y1: 1.5;
        y2: 1.49999;
    }
    to {
        x1: 594;
        x1: 657;
        y1: 1.5;
        y2: 1.49999;
    }
`;

export const Image = styled.svg`
  width: 100%;
  height: auto;
  position: absolute;
  background-color: rgb(0, 0, 0);

  .line {
    x1: 594;
    x1: 657;
    y1: 1.5;
    y2: 1.49999;
    animation: ${moveLeft} 5s linear infinite;
  }
`;
