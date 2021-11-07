import React from "react";
import styled from "styled-components";
import { useHistory, useLocation, Link } from "react-router-dom";
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

function ListCard(props) {
  const history = useHistory();
  const handleClick = ({ id, link, subList }) => {
    // history.push(link);
    history.push("/intro");
  };
  return (
    <Card
      onClick={() => {
        handleClick(props.data);
      }}
    >
      <img className="cover" src={process.env.PUBLIC_URL + `/image/banner/0.jpg`} />
      <p className="item-title">金都餐廳</p>
      <p className="location">
        <FontAwesomeIcon className="mark" icon={faMapMarkerAlt} />
        南投縣 {props.locaiton}
      </p>
    </Card>
  );
}

export default ListCard;
