import React from "react";
import DropDown from "./DropDown.jsx";
import { CITY_LIST } from "@/global/constant";
function CitySelect({ setCity, city }) {
  return <DropDown defaultValue={city} onChange={setCity} options={CITY_LIST} />;
}

export default CitySelect;
