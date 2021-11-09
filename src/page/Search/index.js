import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CitySelect from "../../components/CitySelect";
import ListCard from "../../components/ListCard";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import Crumb from "../../components/Crumb";
import { TYPE_LIST } from "../../global/constant";
import { setSearchData } from "../../store/slice/searchDataSlice";
import { getActivity, getSpot, getRestaurant } from "../../utils/api";

function Index() {
  const dispatch = useDispatch();
  const searchData = useSelector((state) => state.search.searchData);
  const [result, setResult] = useState([]);
  const [city, setCity] = useState("");
  const [keyword, setKeyword] = useState("");
  const placeholderConfig = {
    activity: "你想玩什麼？",
    spot: "你想去哪裡？",
    restaurant: "你想吃什麼？",
  };
  const SearchPageComp = styled.div`
    padding-top: 50px;
    .search-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .search-input {
        flex: 1;
        min-height: 42px;
        margin-right: 5px;
      }
      .search-btn {
        width: 160px;
        height: 40px;
        letter-spacing: 5px;
        display: block;
        cursor: pointer;
        svg {
          margin-right: 5px;
          cursor: pointer;
        }
      }
    }
    .search-result {
      &-text {
        padding: 50px 0 20px;
        font-weight: normal;
        font-size: 28px;
        span {
          padding-left: 6px;
          font-size: 16px;
          strong {
            color: #949142;
          }
        }
      }
      &-list {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }
    }
  `;
  const getCrumb = () => {
    const { label } = TYPE_LIST.find((vo) => vo.value === searchData.type);
    return label;
  };

  const saveSearchData = () => {
    const dataObj = {
      keyword,
      city: city?.value,
      type: searchData.type,
    };
    console.log("dataObj", dataObj);
    dispatch(setSearchData(dataObj));
    getData();
    // history.push("/search");
  };

  const getData = async () => {
    let list = [];
    const sendData = {
      $top: 100,
      City: city?.value,
      // $filter: `Name eq '${keyword}'`,
    };
    switch (searchData.type) {
      case "activity":
        list = await getActivity(sendData);
        break;
      case "spot":
        list = await getSpot(sendData);
        break;
      default:
        list = await getRestaurant(sendData);
        break;
    }
    setResult(list);
  };

  useEffect(() => {
    getCrumb();
    getData();
    console.log("dsdsddsd", searchData);
  }, [searchData]);

  return (
    <SearchPageComp>
      <Crumb type={"首頁"} title={getCrumb()} />
      <div className="search-bar">
        <CitySelect setCity={setCity} city={city} />
        <input
          className="search-input"
          placeholder={`${placeholderConfig[searchData.type]}請輸入關鍵字`}
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
      <div className="search-result">
        <h3 className="search-result-text">
          搜尋結果
          <span>
            共有
            <strong>{result.length}</strong>筆
          </span>
        </h3>
        <div className="search-result-list">
          {result.map((vo) => {
            return <ListCard key={vo.ID} data={{ ...vo, type: searchData.type }} />;
          })}
        </div>
      </div>
    </SearchPageComp>
  );
}

export default Index;
