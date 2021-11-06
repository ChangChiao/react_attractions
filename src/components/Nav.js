import React from "react";
import styled from "styled-components";
import style from "../style/components/nav.module.scss";
const RedDot = styled.span`
  position: relative;
  &::after {
    content: "";
    background: red;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    position: absolute;
    right: -1px;
    top: -1px;
  }
`;

function Nav() {
  return (
    <nav className={`block ${style.nav}`}>
      <ul className="flex justify-end h-14 items-center px-5">
        <li className={style.list_item}>
          <RedDot></RedDot>
          信件
        </li>
        <li className={style.list_item}>
          <RedDot></RedDot>
          通知
        </li>
        <li className={style.list_item}>設置</li>
        <li className={style.list_item}>6687899</li>
        <li className={style.list_item}>登出</li>
      </ul>
    </nav>
  );
}

export default Nav;
