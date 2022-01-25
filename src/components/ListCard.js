import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setIntroData } from "../store/slice/introSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
const Card = styled.div`
  width: 24%;
  cursor: pointer;
  @media (max-width: 980px) {
    width: 100%;
  }
  &:hover {
    .cover {
      img {
        transform: scale(1.1);
      }
    }
  }
  .cover {
    border-radius: 20px;
    height: 200px;
    margin-bottom: 10px;
    overflow: hidden;
    img {
      transition-duration: 0.3s;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .location {
    margin-bottom: 10px;
    text-align: left;
    padding: 10px 0;
  }
`;

function ListCard({ data }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const setImage = (Picture = {}) => {
    const { PictureUrl1 } = Picture;
    return PictureUrl1 ? PictureUrl1 : process.env.PUBLIC_URL + `/image/default/default.png`;
  };
  const handleClick = () => {
    dispatch(setIntroData(data));
    history.push({
      pathname: `/intro`,
      // state: data,
    });
  };
  return (
    <Card
      onClick={() => {
        handleClick();
      }}
    >
      <div className="cover">
        <img src={setImage(data.Picture)} />
      </div>
      <p className="item-title">{data.ScenicSpotName || data.RestaurantName}</p>
      <p className="location">
        <FontAwesomeIcon className="mark" icon={faMapMarkerAlt} />
        {data.Address || data.City}
      </p>
    </Card>
  );
}

export default ListCard;
