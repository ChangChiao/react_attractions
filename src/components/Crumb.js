import React from "react";
import styled from "styled-components";
import { MENU_LIST } from "../global/constant";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setSearchData } from "../store/slice/searchDataSlice";

const CrumbComp = styled.div`
  padding-bottom: 20px;
  font-size: 14px;
  .crumb-text {
    color: var(--green);
    cursor: pointer;
  }
  strong {
    color: var(--green);
    margin: 0 5px;
  }
`;

export default function Crumb({ type, title }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const goPage = (title) => {
    let goPath = "";
    if (title === "首頁") goPath = "/";
    MENU_LIST.forEach((element) => {
      if (element.name === title) {
        goPath = "/search";
        const dataObj = {
          type: element.path,
        };
        dispatch(setSearchData(dataObj));
      }
    });
    goPath &&
      history.push({
        pathname: goPath,
      });
  };
  return (
    <CrumbComp>
      <span
        onClick={() => {
          goPage(type);
        }}
        className="crumb-text"
      >
        {type}
      </span>
      <strong>/</strong>
      <span
        onClick={() => {
          goPage(title);
        }}
        className="crumb-text"
      >
        {title}
      </span>
    </CrumbComp>
  );
}
