import React from "react";
import styled from "styled-components";
import ListCard from "./ListCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const RecommendComp = styled.div`
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
    margin-top: 16px;
  }
`;

function Recommend(props) {
  return (
    <RecommendComp>
      <div className="title-bar">
        <h3 class="title">{props.data.title}</h3>
        <span class="more">
          查看更多活動
          <FontAwesomeIcon className="mark" icon={faChevronRight} />
        </span>
      </div>
      <div className="list">
        {props.data.list &&
          props.data.list.map((vo) => {
            return <ListCard data={vo} />;
          })}
      </div>
    </RecommendComp>
  );
}

export default Recommend;
