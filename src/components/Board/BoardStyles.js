import styled from "styled-components";

export const BoardStyle = styled.div`
  display: grid;
  grid-template-columns: 170px 170px 170px 170px;
  grid-template-rows: 205px 205px 205px 205px;
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
