import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getToken } from "../utils/api";
const DefaultComponent = styled.div`
  /* overflow-y: scroll; */
`;

function DefaultTemp(props) {
  const fetchToken = async () => {
    if (localStorage.getItem("token")) return;
    const res = await getToken();
    if (res.access_token) {
      localStorage.setItem("token", res.access_token);
    }
  };
  useEffect(() => {
    fetchToken();
  }, []);
  return (
    <DefaultComponent>
      <Header />
      <div className="wrapper">{props.children}</div>
      <Footer />
    </DefaultComponent>
  );
}

export default DefaultTemp;
