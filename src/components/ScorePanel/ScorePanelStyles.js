import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const ScorePanelStyle = styled.div`
  max-width: 800px;
  height: 5vh;
  margin: 1.5rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 100%;
  justify-items: center;
  align-items: center;
`;

export const Icon = ({ icon, style }) => (
  <FontAwesomeIcon icon={icon} style={style} />
);

export const starStyle = {
  color: "rgba(139,22,10,0.3)",
  fontSize: "2rem"
};
