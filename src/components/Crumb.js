import React from "react";
import styled from "styled-components";
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
  const typeList = {
    activity: "節慶活動",
    spot: "探索景點",
    restaurant: "品嚐美食",
  };
  return (
    <CrumbComp>
      <span className="crumb-text">{typeList[type]}</span>
      <strong>/</strong>
      <span className="crumb-text">{title}</span>
    </CrumbComp>
  );
}
