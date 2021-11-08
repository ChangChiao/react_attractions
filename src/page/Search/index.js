import React from "react";
import styled from "styled-components";
import CitySelect from "CitySelect";
import Crumb from "../../components/Crumb";
function Index({ data }) {
  return (
    <div>
      <Crumb type={"首頁"} title={data.type} />
      <div>CitySelect</div>
    </div>
  );
}

export default Index;
