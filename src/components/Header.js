import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { MENU_LIST } from "../global/constant";
import { setSearchData } from "../store/slice/searchDataSlice";

const HeaderComp = styled.header`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  border-bottom: 1px solid #ccc;
  h1 {
    color: var(--green);
    letter-spacing: 5px;
    font-size: 20px;
    cursor: pointer;
  }
`;

const MenuComp = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    margin: 0 10px;
    cursor: pointer;
  }
`;

function Header() {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleClick = (path) => {
    const dataObj = {
      type: path,
    };
    dispatch(setSearchData(dataObj));
    history.push("/search");
  };
  return (
    <HeaderComp>
      {/* <img src="" alt=""/> */}
      <h1
        onClick={() => {
          handleClick("/");
        }}
      >
        台灣走走 • Taiwan
      </h1>
      <MenuComp>
        {MENU_LIST.map((vo) => {
          return (
            <li
              key={vo.name}
              onClick={() => {
                handleClick(vo.path);
              }}
            >
              {vo.name}
            </li>
          );
        })}
      </MenuComp>
    </HeaderComp>
  );
}

export default Header;
