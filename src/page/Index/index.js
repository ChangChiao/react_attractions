import React, { useEffect, useState } from "react";
import Slider from "./components/Slider";
import Search from "./components/Search";
import Activity from "./components/Activity";
import Recommend from "../../components/Recommend.jsx";
import { getSpot, getRestaurant } from "../../utils/api";

function Index() {
  const [spotList, setSpotList] = useState([]);
  const [restList, setRestList] = useState([]);
  const getSpotApi = async () => {
    const sendData = {
      $top: 4,
      $filter: "Picture/PictureUrl1 ne null",
    };
    try {
      let result = await getSpot(sendData);
      if (Array.isArray(result)) {
        setSpotList((prevState) => [...prevState, ...result]);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const getRestaurantApi = async () => {
    const sendData = {
      $top: 4,
      $filter: "Picture/PictureUrl1 ne null",
    };
    try {
      let result = await getRestaurant(sendData);
      if (Array.isArray(result)) {
        setRestList((prevState) => [...prevState, ...result]);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    console.log("spotList", spotList);
  }, [spotList]);

  useEffect(() => {
    getSpotApi();
    getRestaurantApi();
  }, []);
  return (
    <div>
      <Search />
      <Slider />
      <Activity />
      <Recommend title="熱門打卡景點" type="spot" data={spotList} />
      <Recommend title="一再回訪美食" type="restaurant" data={restList} />
    </div>
  );
}

export default Index;
