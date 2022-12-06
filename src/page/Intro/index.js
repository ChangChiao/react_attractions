import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Recommend from "../../components/Recommend.jsx";
// import { useLocation } from "react-router";
import { useSelector } from "react-redux";
// import Map from "./components/Map";
import MapIframe from "./components/MapIframe.jsx";
import { getActivity, getSpot, getRestaurant } from "../../utils/api";
import InfoCardAct from "../../components/InfoCardAct.jsx";
import InfoCardRest from "../../components/InfoCardRest.jsx";
import InfoCardSpot from "../../components/InfoCardSpot.jsx";
import Crumb from "../../components/Crumb.jsx";
import { TYPE_LIST } from "../../global/constant";

const IntroComp = styled.div`
  margin-top: 30px;
  .main-cover {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 20px;
    @media (max-width: 980px) {
      height: 200px;
    }
  }
  .intro-title {
    font-size: 32px;
    padding: 20px 0 16px;
  }
  .tag {
    color: var(--brown);
    font-size: 14px;
    padding: 5px;
    border-radius: 20px;
    margin-right: 5px;
    border: 1px solid var(--brown);
  }
  .content {
    padding: 30px 0 20px;
    h3 {
      padding-bottom: 14px;
    }
    p {
      line-height: 24px;
    }
  }
  .intro {
    display: flex;
    justify-content: space-between;
    @media (max-width: 980px) {
      display: block;
    }
  }
  .map {
    width: 48%;
    height: 100%;
    @media (max-width: 980px) {
      width: 100%;
    }
  }
  .detail {
    width: 48%;
    background: #f9f9f9;
    border-radius: 20px;
    padding: 20px 10px;
    @media (max-width: 980px) {
      width: 100%;
    }
    p {
      padding: 8px 0;
      display: flex;
      line-height: 20px;
      .focus {
        margin-right: 5px;
        word-break: keep-all;
      }
    }
    a {
      word-break: break-all;
      color: var(--green);
    }
  }
`;
function Index() {
  // const { state } = useLocation();
  const [recommend, setRecommend] = useState({});
  const [tag, setTag] = useState([]);
  const [title, setTitle] = useState("");
  const introData = useSelector((state) => state.intro.introData);
  const saveState = () => {
    // if (!state) {
    //   const data = localStorage.getItem("intro");
    //   setData(JSON.parse(data));
    //   return;
    // }
    // localStorage.setItem("intro", JSON.stringify(state));
    // setData(state);
  };
  const setImage = (Picture = {}) => {
    const { PictureUrl1 } = Picture;
    return PictureUrl1 ? PictureUrl1 : process.env.PUBLIC_URL + `/image/default/act.jpg`;
  };

  const randomNum = (x) => {
    const num = Math.floor(Math.random() * x) + 1;
    return num * 4;
  };
  const getRecommend = async () => {
    const sendData = {
      $top: 4,
      $skip: randomNum(30),
      $filter: "Picture/PictureUrl1 ne null",
    };
    let title = "";
    let result = [];
    switch (introData.type) {
      case "activity":
        title = "活動";
        result = await getActivity(sendData);
        break;
      case "spot":
        title = "景點";
        result = await getSpot(sendData);
        break;
      default:
        title = "餐廳";
        result = await getRestaurant(sendData);
        break;
    }

    setTitle(title);
    setRecommend({
      type: introData.type,
      title: "還有這些不能錯過",
      list: result,
    });
  };

  const InfoCard = () => {
    switch (introData.type) {
      case "activity":
        return <InfoCardAct data={introData} />;
      case "spot":
        return <InfoCardSpot data={introData} />;
      default:
        return <InfoCardRest data={introData} />;
    }
  };

  const getTag = () => {
    let arr = [];
    for (const [key, value] of Object.entries(introData)) {
      if (key.includes("Class")) arr.push(`#${value}`);
    }
    if (arr.length === 0) arr.push("#熱門打卡");
    setTag(arr);
  };
  const getCrumb = () => {
    if (!introData.type) return "";
    const { label } = TYPE_LIST.find((vo) => vo.value === introData.type);
    return label;
  };

  const getTitle = (data) => {
    const { ActivityName, ScenicSpotName, RestaurantName } = data;
    return ActivityName || ScenicSpotName || RestaurantName;
  };

  useEffect(() => {
    // saveState();
  }, []);

  useEffect(() => {
    getRecommend();
    getTag();
  }, [introData]);

  return (
    <IntroComp>
      <Crumb type={getCrumb()} title={getTitle(introData)} />
      <img className="main-cover" src={setImage(introData.Picture)} />
      <h2 className="intro-title">{getTitle(introData)}</h2>
      <div className="tag-group">
        {tag?.map((vo) => {
          return (
            <span className="tag" key={vo}>
              {vo}
            </span>
          );
        })}
      </div>
      <div className="content">
        <h3 className="focus">{title}介紹:</h3>
        <p>{introData.type === "spot" ? introData.DescriptionDetail : introData.Description}</p>
      </div>
      <div className="intro">
        <InfoCard />
        <div className="map">
          <MapIframe Name={getTitle(introData)} />
          {/* <Map Position={introData.Position} /> */}
        </div>
      </div>
      <Recommend data={recommend} />
    </IntroComp>
  );
}

export default Index;
