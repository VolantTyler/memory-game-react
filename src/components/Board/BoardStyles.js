import styled from "styled-components";

export const BoardStyle = styled.div`
  display: grid;
  grid-template-columns: 130px 130px 130px 130px;
  grid-template-rows: 165px 165px 165px 165px;
  grid-gap: 0.5rem;
  width: 100%;
  max-height: 80vh;
  height: 1350px;
  margin: 0 auto;
  justify-content: center;
  & > * {
    cursor: pointer;
  }
`;
