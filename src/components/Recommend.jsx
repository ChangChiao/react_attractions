import React from "react";
import styled from "styled-components";
import ListCard from "./ListCard.jsx";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { setSearchData } from "@/store/slice/searchDataSlice";

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
    @media (max-width: 980px) {
      display: block;
    }
  }
`;

function Recommend({ title, type, data }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleClick = () => {
    const dataObj = {
      type,
    };
    dispatch(setSearchData(dataObj));
    history.push("/search");
  };
  return (
    <RecommendComp>
      <div className="title-bar">
        <h3 className="title">{title}</h3>
        <span className="more" onClick={handleClick}>
          查看更多活動
          <FontAwesomeIcon className="mark" icon={faChevronRight} />
        </span>
      </div>
      <div className="list">
        {data?.map((vo) => {
          return <ListCard data={{ ...vo, type }} key={vo.ScenicSpotID ?? vo.RestaurantID} />;
        })}
      </div>
    </RecommendComp>
  );
}

export default Recommend;
