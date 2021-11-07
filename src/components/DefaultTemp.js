import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
const DefaultComponent = styled.div`
  /* display: flex; */
`;

function DefaultTemp(props) {
  return (
    <DefaultComponent>
      <Header />
      {props.children}
      <Footer />
    </DefaultComponent>
  );
}

export default DefaultTemp;
