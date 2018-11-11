import ReactModal from "react-modal";
import styled from "styled-components";

ReactModal.setAppElement("#root");

export const SettingsModalStyled = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  width: 25vw;
  height: 50vh;
  border: 1px solid black;
  padding: 2rem;
`;

export const MainSettingsStyle = styled.div`
  fontsize: 0.8rem;
  border-top: 1px solid rgba(139, 22, 10, 0.3);
  border-bottom: 1px solid rgba(139, 22, 10, 0.3);
  display: grid;
  justify-content: center;
`;

export const SelectStyle = styled.select`
  border: none;
  outline: none;
  padding: 5px;
  cursor: pointer;
  margin: 0 auto;
`;
