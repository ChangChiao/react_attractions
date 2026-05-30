import React, { useEffect, useState } from "react";
import Slider from "./components/Slider.jsx";
import Search from "./components/Search.jsx";
import Activity from "./components/Activity.jsx";
import Recommend from "../../components/Recommend.jsx";
import { getSpot, getRestaurant } from "../../utils/api";
import { COVER_FILTER } from "../../global/constant";

function Index() {
  const [spotList, setSpotList] = useState([]);
  const [restList, setRestList] = useState([]);
  const getSpotApi = async () => {
    const sendData = {
      $top: 4,
      $filter: COVER_FILTER,
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
      $filter: COVER_FILTER,
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
