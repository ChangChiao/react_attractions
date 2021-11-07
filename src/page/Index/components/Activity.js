import React from "react";
import styled from "styled-components";
import ListItem from "../../../components/ListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

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
  }
`;

const list = [1, 3, 4, 5];
function Activity() {
  return (
    <ActComp>
      <div className="title-bar">
        <h3 class="title">近期活動</h3>
        <span class="more">
          查看更多活動
          <FontAwesomeIcon className="mark" icon={faChevronRight} />
        </span>
      </div>
      <div className="list">
        {list.map((vo) => {
          return <ListItem data={vo} />;
        })}
      </div>
    </ActComp>
  );
}

export default Activity;
