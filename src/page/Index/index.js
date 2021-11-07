import React from "react";
import Slider from "./components/Slider";
import Search from "./components/Search";
import Activity from "./components/Activity";
import Hot from "./components/Hot";
import FoodRecommend from "./components/FoodRecommend";
function index() {
  return (
    <div>
      <Search />
      <Slider />
      <Activity />
      <Hot />
      <FoodRecommend />
    </div>
  );
}

export default index;
