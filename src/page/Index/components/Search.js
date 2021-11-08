import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faSearch } from "@fortawesome/free-solid-svg-icons";
import DropDown from "../../../components/DropDown";
import { setSearchData } from "../../../store/slice/searchDataSlice";
import { TYPE_LIST } from "../../../global/constant";

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
    cursor: pointer;
    svg {
      margin-right: 5px;
      cursor: pointer;
    }
  }
`;

function Search() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [keyword, setKeyword] = useState("");
  const [selectedOption, setSelectedOption] = useState(TYPE_LIST[1]);

  const saveSearchData = () => {
    const dataObj = {
      keyword,
      type: selectedOption?.value,
    };
    dispatch(setSearchData(dataObj));
    history.push("/search");
  };

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
        <DropDown defaultValue={selectedOption} onChange={setSelectedOption} options={TYPE_LIST} />
        <input
          className="search-input"
          placeholder="你想去哪裡？請輸入關鍵字"
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
        <button className="search-btn" onClick={saveSearchData}>
          <FontAwesomeIcon className="mark" icon={faSearch} />
          搜尋
        </button>
      </div>
    </TitleComp>
  );
}

export default Search;
