import React from "react";
import styled from "styled-components";
import ListCard from "../../../components/ListCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const HotComp = styled.div`
  margin-top: 50px;
  .title-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg {
      margin-left: 5px;
    }
  }
  .list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 10px;
  }
`;
const list = [1, 3, 4, 5];
function Hot() {
  return (
    <HotComp>
      <div className="title-bar">
        <h3 className="title">熱門打卡景點</h3>
        <span className="more">
          查看更多活動
          <FontAwesomeIcon className="mark" icon={faChevronRight} />
        </span>
      </div>
      <div className="list">
        {list.map((vo) => {
          return <ListCard data={vo} key={vo.ScenicSpotID} />;
        })}
      </div>
    </HotComp>
  );
}

export default Hot;
