import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { transDate } from "../utils/common";
const ListComp = styled.div`
  width: 49%;
  cursor: pointer;
  display: flex;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 12px;
  margin-top: 10px;
  background-color: var(--gray);
  img {
    width: 150px;
    object-fit: cover;
  }
  .text {
    flex: 1;
    padding: 10px 14px;
    position: relative;
  }
  .bottom-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    width: 90%;
    bottom: 10px;
  }
`;

function ListItem({ data }) {
  const setImage = (Picture = {}) => {
    const { PictureUrl1 } = Picture;
    return PictureUrl1 ? PictureUrl1 : process.env.PUBLIC_URL + `/image/default/act.jpg`;
  };
  return (
    <ListComp>
      <img src={setImage(data.Picture)} />
      <div className="text">
        <p className="date">{`${transDate(data.StartTime)}-${transDate(data.EndTime)}`}</p>
        <p className="item-title">{data.Name}</p>
        <p className="bottom-info">
          <span className="location">
            <FontAwesomeIcon className="mark" icon={faMapMarkerAlt} />
            南投縣 {data.Address}
          </span>
          <span className="intro">
            詳細介紹
            <FontAwesomeIcon className="mark" icon={faChevronRight} />
          </span>
        </p>
      </div>
    </ListComp>
  );
}

export default ListItem;
