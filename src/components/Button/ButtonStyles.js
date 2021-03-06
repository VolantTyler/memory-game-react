import styled from "styled-components";

export const ButtonStyle = styled.button.attrs({
  label: props => props.label
})`
  border-radius: 2px;
  background-color: rgba(139, 22, 10, 0.3);
  border: 1px solid transparent;
  padding: 0.5rem;
  margin: 0 0.5rem;
  outline: none;
  &:hover {
    cursor: pointer;
    background-color: rgba(159, 22, 10, 0.6);
    color: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(139, 22, 10, 0.3);
    transform: translateY(-1.5px);
  }
  &:active {
    transform: translateY(1px);
    box-shadow: 0 1px 3px 1px rgba(12, 12, 12, 0.25);
  }
`;
