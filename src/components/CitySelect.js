import React, { useEffect, useState } from "react";
import cityData from "../assets/City.json";
import DropDown from "../../../components/DropDown";
function CitySelect() {
  const [list, setList] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const getCityData = () => {
    const list = cityData.map((vo) => {
      return {
        value: vo.CityName,
        label: vo.CityName,
      };
    });
    setList(list);
  };
  useEffect(() => {
    getCityData();
  }, []);
  return <DropDown defaultValue={selectedOption} onChange={setSelectedOption} options={list} />;
}

export default CitySelect;
