import React from "react";
import styled from "styled-components";

const HeaderComp = styled.header`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  border: 1px solid #ccc;
  h1 {
    color: var(--green);
    letter-spacing: 5px;
    font-size: 20px;
  }
`;

const MenuComp = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    margin: 0 10px;
  }
`;

const menu = [
  { name: "探索景點", path: "/attraction" },
  { name: "節慶活動", path: "/festival" },
  { name: "品嚐美食", path: "/food" },
];

function Header() {
  return (
    <HeaderComp>
      {/* <img src="" alt=""/> */}
      <h1>台灣走走 • Taiwan</h1>
      <MenuComp>
        {menu.map((vo) => {
          return <li key="vo.name">{vo.name}</li>;
        })}
      </MenuComp>
    </HeaderComp>
  );
}

export default Header;
