import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  } 
  30% {
    transform: rotate(-50deg);
  }
  60% {
    transform: rotate(50deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

export const GearStyled = styled.div`
  font-size: 3rem;
  color: rgba(139, 22, 10, 0.3);
  stroke: black;
  stroke-width: 2px;
  filter: drop-shadow(0 1px 1px #777);
  &:hover {
    cursor: pointer;
    animation: ${rotate} 3s ease-in-out 0s;
  }
  &:active {
    transform: scale(1.1);
  }
`;


export const EscapeStyled = styled.div`
  font-size: 3rem;
  color: rgba(139, 22, 10, 0.3);
  stroke: black;
  stroke-width: 2px;
  filter: drop-shadow(0 1px 1px #777);
  &:hover {
    cursor: pointer;
    animation: ${rotate} 3s ease-in-out 0s;
  }
  &:active {
    transform: scale(1.1);
  }
`;