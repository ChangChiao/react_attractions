import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
const DefaultComponent = styled.div`
  /* overflow-y: scroll; */
`;

function DefaultTemp(props) {
  return (
    <DefaultComponent>
      <Header />
      <div className="wrapper">{props.children}</div>
      <Footer />
    </DefaultComponent>
  );
}

export default DefaultTemp;
