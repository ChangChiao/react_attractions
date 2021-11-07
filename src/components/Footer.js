import React from "react";
import styled from "styled-components";

const FooterComponent = styled.footer`
  height: 60px;
  line-height: 60px;
  text-align: center;
  background-color: var(--green);
  color: #fff;
`;

function Footer() {
  return <FooterComponent>The F2E 3rd 台灣旅遊景點導覽</FooterComponent>;
}

export default Footer;
