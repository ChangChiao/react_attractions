import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faSearch } from "@fortawesome/free-solid-svg-icons";
import DropDown from "../../../components/DropDown";
const TitleComp = styled.div`
  text-align: left;
  padding: 5% 10%;
  display: flex;
  justify-content: center;
  .area {
    width: 40%;
  }
  .main-title {
    font-size: 36px;
    /* letter-spacing: 5px; */
    line-height: 50px;
  }
  .sub-title {
    font-size: 16px;
    padding-top: 20px;
    color: #646464;
    svg {
      color: var(--green_light);
      margin: 0 5px;
    }
    span {
      color: #646464;
    }
  }
  .search-input {
    width: 300px;
    margin-top: 10px;
  }
  .search-btn {
    width: 300px;
    height: 40px;
    margin-top: 10px;
    letter-spacing: 5px;
    display: block;
    svg {
      margin-right: 5px;
      cursor: pointer;
    }
  }
`;

function Search() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const [keyword, setKeyword] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <TitleComp>
      <div className="area">
        <p className="main-title">探索台灣之美</p>
        <p className="main-title">讓我們更親近這片土地</p>
        <p className="sub-title">
          <FontAwesomeIcon className="mark" icon={faMapMarkerAlt} />
          台灣旅遊景點導覽 <span>Taiwan Travel Guide</span>
        </p>
      </div>
      <div className="area">
        <DropDown defaultValue={selectedOption} onChange={setSelectedOption} options={options} />
        <input
          className="search-input"
          placeholder="你想去哪裡？請輸入關鍵字"
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
        <button className="search-btn">
          <FontAwesomeIcon className="mark" icon={faSearch} />
          搜尋
        </button>
      </div>
    </TitleComp>
  );
}

export default Search;
