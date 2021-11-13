import React, { useEffect, useState } from "react";
import Slider from "./components/Slider";
import Search from "./components/Search";
import Activity from "./components/Activity";
import Recommend from "../../components/Recommend";
import { getSpot, getRestaurant } from "../../utils/api";

function Index() {
  const [spotList, setSpotList] = useState({
    title: "熱門打卡景點",
    type: "spot",
    list: [],
  });
  const [restList, setRestList] = useState({
    title: "一再回訪美食",
    type: "restaurant",
    list: [],
  });
  const getSpotApi = async () => {
    const sendData = {
      $top: 4,
      $filter: "Picture/PictureUrl1 ne null",
    };
    let result = await getSpot(sendData);
    setSpotList((prevState) => ({
      ...prevState,
      list: result,
    }));
  };

  const getRestaurantApi = async () => {
    const sendData = {
      $top: 4,
      $filter: "Picture/PictureUrl1 ne null",
    };
    let result = await getRestaurant(sendData);
    setRestList((prevState) => ({
      ...prevState,
      list: result,
    }));
  };

  useEffect(() => {
    getSpotApi();
    getRestaurantApi();
  }, []);
  return (
    <div>
      <Search />
      <Slider />
      <Activity />
      <Recommend data={spotList} />
      <Recommend data={restList} />
    </div>
  );
}

export default Index;
