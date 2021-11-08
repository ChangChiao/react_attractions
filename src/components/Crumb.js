import React from "react";
import styled from "styled-components";
import { TYPE_LIST } from "../global/constant";
const CrumbComp = styled.div`
  padding-bottom: 20px;
  font-size: 14px;
  .crumb-text {
    color: var(--green);
  }
  strong {
    color: var(--green);
    margin: 0 5px;
  }
`;

export default function Crumb({ type, title }) {
  return (
    <CrumbComp>
      <span className="crumb-text">{TYPE_LIST[type]}</span>
      <strong>/</strong>
      <span className="crumb-text">{title}</span>
    </CrumbComp>
  );
}
