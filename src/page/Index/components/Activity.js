import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ListItem from "../../../components/ListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { getActivity } from "../../../utils/api";
const ActComp = styled.div`
  margin-top: 30px;
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
    @media (max-width: 980px) {
      display: block;
    }
  }
`;

function Activity() {
  const [list, setList] = useState([]);
  const getAct = async () => {
    const sendData = {
      $top: 4,
      $orderBy: "EndTime desc",
      $filter: "Picture/PictureUrl1 ne null",
    };
    const result = await getActivity(sendData);
    setList(result);
  };
  useEffect(() => {
    getAct();
  }, []);
  return (
    <ActComp>
      <div className="title-bar">
        <h3 className="title">近期活動</h3>
        <span className="more">
          查看更多活動
          <FontAwesomeIcon className="mark" icon={faChevronRight} />
        </span>
      </div>
      <div className="list">
        {list.map((vo) => {
          return <ListItem key={vo.ID} data={{ ...vo, type: "activity" }} />;
        })}
      </div>
    </ActComp>
  );
}

export default Activity;
