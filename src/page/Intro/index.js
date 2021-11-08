import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Recommend from "../../components/Recommend";
import { useLocation } from "react-router";
import Map from "./components/Map";
import { getActivity, getSpot, getRestaurant } from "../../utils/api";
import InfoCardAct from "../../components/InfoCardAct";
import InfoCardRest from "../../components/InfoCardRest";
import InfoCardSpot from "../../components/InfoCardSpot";
import Crumb from "../../components/Crumb";
const IntroComp = styled.div`
  margin-top: 30px;
  .main-cover {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 20px;
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
  }
  .map {
    width: 48%;
  }
  .detail {
    width: 48%;
    background: #f9f9f9;
    border-radius: 20px;
    padding: 20px 10px;
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
  const { state } = useLocation();
  const [data, setData] = useState({});
  const [recommend, setRecommend] = useState({});
  const [tag, setTag] = useState([]);
  const [title, setTitle] = useState("");
  const saveState = () => {
    if (!state) {
      const data = localStorage.getItem("intro");
      setData(JSON.parse(data));
      return;
    }
    localStorage.setItem("intro", JSON.stringify(state));
    setData(state);
  };
  const setImage = (Picture = {}) => {
    const { PictureUrl1 } = Picture;
    return PictureUrl1 ? PictureUrl1 : process.env.PUBLIC_URL + `/image/default/act.jpg`;
  };
  const getRecommend = async () => {
    const sendData = {
      $top: 4,
    };
    let title = "";
    let result = [];
    setTimeout(() => {
      console.log("data.type", data.type);
      console.log("state", state);
    }, 3000);
    switch (data.type) {
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
      title: "還有這些不能錯過的" + title,
      list: result,
    });
  };

  const InfoCard = () => {
    switch (data.type) {
      case "activity":
        return <InfoCardAct data={data} />;
      case "spot":
        return <InfoCardSpot data={data} />;
      default:
        return <InfoCardRest data={data} />;
    }
  };

  const getTag = () => {
    let arr = [];
    for (const [key, value] of Object.entries(data)) {
      if (key.includes("Class")) arr.push(`#${value}`);
    }
    if (arr.length === 0) arr.push("#熱門打卡");
    setTag(arr);
  };

  useEffect(() => {
    saveState();
  }, []);

  useEffect(() => {
    getRecommend();
    getTag();
  }, [data]);

  return (
    <IntroComp>
      <Crumb type={data.type} title={data.Name} />
      <img className="main-cover" src={setImage(data.Picture)} />
      <h2 className="intro-title">{data.Name}</h2>
      <div className="tag-group">
        {/* <span className="tag">#自然風景類</span>
        <span className="tag">#熱門景點</span> */}
        {tag.map((vo) => {
          return (
            <span className="tag" key={vo}>
              {vo}
            </span>
          );
        })}
      </div>
      <div className="content">
        <h3 className="focus">{title}介紹:</h3>
        <p>{data.type === "spot" ? data.DescriptionDetail : data.Description}</p>
      </div>
      <div className="intro">
        <InfoCard />
        <div className="map">
          <Map Position={data.Position} />
        </div>
      </div>
      <Recommend data={recommend} />
    </IntroComp>
  );
}

export default Index;
