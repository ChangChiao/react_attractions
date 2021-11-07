import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
const Card = styled.div`
  width: 24%;
  cursor: pointer;
  .cover {
    border-radius: 20px;
    height: 200px;
    object-fit: cover;
    margin-bottom: 10px;
    display: block;
    width: 100%;
  }
  .location {
    margin-bottom: 10px;
    text-align: left;
    padding: 10px 0;
  }
`;

function ListCard({ data }) {
  const history = useHistory();
  const setImage = (Picture = {}) => {
    const { PictureUrl1 } = Picture;
    return PictureUrl1 ? PictureUrl1 : process.env.PUBLIC_URL + `/image/default/act.jpg`;
  };
  const handleClick = () => {
    // history.push(link);
    history.push({
      pathname: "/intro",
      state: data,
    });
  };
  return (
    <Card
      onClick={() => {
        handleClick();
      }}
    >
      <img className="cover" src={setImage(data.Picture)} />
      <p className="item-title">{data.Name}</p>
      <p className="location">
        <FontAwesomeIcon className="mark" icon={faMapMarkerAlt} />
        {data.Address && data.Address.substring(0, 3)}
      </p>
    </Card>
  );
}

export default ListCard;
