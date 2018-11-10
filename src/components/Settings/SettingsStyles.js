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
    animation: ${rotate} 3s ease-in-out 0s;
  }
  &:active {
    transform: scale(1.1);
  }
`;

export const MainSettingsStyle = styled.div`
  fontsize: 0.8rem;
  border-top: 1px solid rgba(139, 22, 10, 0.3);
  border-bottom: 1px solid rgba(139, 22, 10, 0.3);
`;

export const SelectStyle = styled.select`
  border: none;
  outline: none;
  padding: 5px;
`;
