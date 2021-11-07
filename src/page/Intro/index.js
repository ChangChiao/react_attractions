import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Recommend from "../../components/Recommend";
import { useLocation } from "react-router";
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
      .focus {
        margin-right: 5px;
        word-break: keep-all;
      }
    }
  }
`;
function Index() {
  const { state } = useLocation();
  const setImage = (Picture = {}) => {
    const { PictureUrl1 } = Picture;
    return PictureUrl1 ? PictureUrl1 : process.env.PUBLIC_URL + `/image/default/act.jpg`;
  };
  const recommend = {
    title: "還有這些不能錯過的景點",
    list: [1, 3, 4, 5],
  };
  return (
    <IntroComp>
      <img className="main-cover" src={setImage(state.Picture)} />
      <h2 className="intro-title">{state.Name}</h2>
      <div className="tag-group">
        <span className="tag">#自然風景類</span>
        <span className="tag">#林場類</span>
      </div>
      <div className="content">
        <h3 className="focus">景點介紹:</h3>
        <p>{state.DescriptionDetail}</p>
      </div>
      <div className="info">
        <div className="detail">
          <p>
            <h3 className="focus">開放時間:</h3>
            {state.OpenTime}
          </p>
          <p>
            <h3 className="focus">服務電話:</h3>
            {state.Phone}
          </p>
          <p>
            <h3 className="focus">景點地址:</h3>
            {state.Address}
          </p>
          {/* <p>
            <h3 className="focus">官方網站:</h3>
           
          </p> */}
          <p>
            <h3 className="focus">票價資訊:</h3>
            {state.TicketInfo}
          </p>
          <p>
            <h3 className="focus">注意事項:</h3>
            {state.Remarks}
          </p>
        </div>
        <div className="map"></div>
      </div>
      <Recommend data={recommend} />
    </IntroComp>
  );
}

export default Index;
