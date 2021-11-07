import React from "react";
import Slider from "./components/Slider";
import Search from "./components/Search";
import Activity from "./components/Activity";
import Recommend from "../../components/Recommend";
function index() {
  const hot = {
    title: "熱門打卡景點",
    list: [1, 3, 4, 5],
  };
  const food = {
    title: "一再回訪美食",
    list: [1, 3, 4, 5],
  };
  return (
    <div>
      <Search />
      <Slider />
      <Activity />
      <Recommend data={hot} />
      <Recommend data={food} />
    </div>
  );
}

export default index;
