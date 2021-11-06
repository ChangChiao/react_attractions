import React from "react";
import SideBar from "../components/SideBar";
import styled from "styled-components";

const DefaultComponent = styled.div`
  display: flex;
`;

function DefaultTemp(props) {
  return (
    <DefaultComponent>
      <SideBar />
      <div className="wrapper">
        <div className="container">{props.children}</div>
      </div>
    </DefaultComponent>
  );
}

export default DefaultTemp;
