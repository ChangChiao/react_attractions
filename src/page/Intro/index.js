import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Recommend from "../../components/Recommend";
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
      }
    }
  }
`;
function index(props) {
  const recommend = {
    title: "還有這些不能錯過的景點",
    list: [1, 3, 4, 5],
  };
  return (
    <IntroComp>
      <img className="main-cover" src={process.env.PUBLIC_URL + `image/banner/0.jpg`} />
      <h2 className="intro-title">羅東林業文化</h2>
      <div className="tag-group">
        <span className="tag">#自然風景類</span>
        <span className="tag">#林場類</span>
      </div>
      <div className="content">
        <h3 className="focus">景點介紹:</h3>
        <p>
          日治時期台灣有三大林場，分別是：八仙山林場、阿里山林場以及太平山林場。從太平山林場所砍伐的檜木、扁柏等木材，都會運送到羅東出張所和貯木池進行存放，而羅東出張所經過規劃後，成為現今的羅東林業文化園區。羅東林業文化區坐落於羅東市區附近，交通十分方便，園內規劃有貯木池、森林鐵路、竹林車站、蒸汽火車頭、綠林和步道等，從這些設備、建築物中發現當年的林業發展多麼蓬勃，又是多麼地熱鬧，同時也讓人不禁感慨，許多珍貴的檜木消逝在太平山中。隨著林業發展的轉型，可以看見昔日風華的貯木池，零散放著當時砍伐的檜木，如今，貯木池不再具有貯木的功能，而是成為水鳥和魚兒們的天堂。在園區中散步，彷彿進入一座秘密花園，園內種植滿滿茂密的樹木，不時聽見鳥兒的叫聲，空氣中帶有芬多精與淡淡的檜木香，舒服的環境，令人不禁停下腳步，感受內心的寧靜。
        </p>
      </div>
      <div className="info">
        <div className="detail">
          <p>
            <h3 className="focus">開放時間:</h3>
            08:00-19:00
          </p>
          <p>
            <h3 className="focus">服務電話:</h3>
            03-2232390
          </p>
          <p>
            <h3 className="focus">景點地址:</h3>
            彰化縣彰化市三民路五號
          </p>
          <p>
            <h3 className="focus">官方網站:</h3>
            https://google.com
          </p>
          <p>
            <h3 className="focus">票價資訊:</h3>
            200
          </p>
          <p>
            <h3 className="focus">注意事項:</h3>
            呼啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦
          </p>
        </div>
        <div className="map"></div>
      </div>
      <Recommend data={recommend} />
    </IntroComp>
  );
}

export default index;
