import React, { useEffect, useState } from "react";

function Category() {
  const [result, setResult] = useState([]);
  const getData = async () => {
    const sendData = {
      $top: keyword ? 0 : 500,
      $select: "Class",
    };
    switch (searchData.type) {
      case "activity":
        list = await getActivity(sendData);
        break;
      case "spot":
        list = await getSpot(sendData);
        break;
      default:
        list = await getRestaurant(sendData);
        break;
    }
  };
  return <div></div>;
}

export default Category;
