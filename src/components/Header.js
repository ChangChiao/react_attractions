import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MENU_LIST } from "../global/constant";

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
  const handleClick = (path) => {
    history.push(path);
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
