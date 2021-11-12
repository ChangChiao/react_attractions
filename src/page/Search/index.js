import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CitySelect from "../../components/CitySelect";
import ListCard from "../../components/ListCard";
import Crumb from "../../components/Crumb";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { TYPE_LIST } from "../../global/constant";
import { setSearchData } from "../../store/slice/searchDataSlice";
import { getActivity, getSpot, getRestaurant } from "../../utils/api";
import DatePicker from "react-datepicker";
import Loading from "../../components/Loading";
import "react-datepicker/dist/react-datepicker.css";

function Index() {
  let endFlag = false;
  let skip = 0;
  const dispatch = useDispatch();
  const [result, setResult] = useState([]);
  const [city, setCity] = useState("");
  const [str, setStr] = useState("");
  const [keyword, setKeyword] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [pennding, setPennding] = useState(false);
  const searchData = useSelector((state) => state.search.searchData);
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
      @media (max-width: 980px) {
        display: block;
      }
      .search-input {
        flex: 1;
        min-height: 42px;
        margin-right: 5px;
        @media (max-width: 980px) {
          width: 100%;
          margin: 10px 0;
        }
      }
      .search-btn {
        width: 160px;
        height: 40px;
        letter-spacing: 5px;
        display: block;
        cursor: pointer;
        @media (max-width: 980px) {
          width: 100%;
        }
        svg {
          margin-right: 5px;
          cursor: pointer;
        }
      }
    }
    .search-result {
    }
  `;

  const SearchResultComp = styled.div`
    .search-result-text {
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
    .search-result-list {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      @media (max-width: 980px) {
        display: block;
      }
      svg {
        color: var(--green);
      }
    }
    .no-data {
      font-size: 20px;
      line-height: 24px;
      width: 200px;
      margin: 0 auto;
      text-align: center;
      svg {
        display: block;
        font-size: 60px;
        margin: 20px auto;
      }
    }
  `;
  const getCrumb = () => {
    const { label } = TYPE_LIST.find((vo) => vo.value === searchData.type);
    return label;
  };

  const saveSearchData = () => {
    // const dataObj = {
    //   keyword,
    //   city: city?.value,
    //   type: searchData.type,
    // };
    // console.log("dataObj", dataObj);
    // resetSearch();
    // dispatch(setSearchData(dataObj));
  };

  const resetSearch = () => {
    skip = 0;
    endFlag = false;
    setResult([]);
  };

  const chainStr = (arr) => {
    let newArr = arr.filter((vo) => vo !== "");
    return newArr.join(" and ");
  };

  const transDate = (date) => {
    const time = new Date(date);
    return [time.getMonth() + 1, time.getFullYear()];
  };

  const getData = async () => {
    let list = [];
    const { keyword, city } = searchData;
    let [month, year] = searchData.type === "activity" ? transDate(startDate) : [];
    let nameStr = keyword ? `Name eq '${keyword}'` : "";
    let monthStr = month ? `month(StartTime) eq ${month}` : "";
    let yearStr = year ? `year(StartTime) eq ${year}` : "";
    const sendData = {
      $top: 30,
      $skip: skip,
      $filter: chainStr([nameStr, monthStr, yearStr]),
      city: city,
    };
    setPennding(true);
    try {
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
      setPennding(false);
      if (list.length === 0) {
        endFlag = true;
      } else {
        setResult((prevState) => [...prevState, ...list]);
      }
    } catch (error) {
      setPennding(false);
    }
  };

  const loadMore = () => {
    if (endFlag) return;
    skip += 30;
    getData();
  };

  const handleChange = (event) => {
    setStr(event.target.value);
  };

  // useEffect(() => {
  //   window.onscroll = function () {
  //     if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
  //       console.log("is-bottom");
  //       !pennding && loadMore();
  //     }
  //   };
  //   return () => {
  //     dispatch(setSearchData({ type: searchData.type }));
  //   };
  // }, []);

  // useEffect(() => {
  //   getCrumb();
  //   getData();
  //   console.log("2222");
  // }, [searchData]);

  return (
    <SearchPageComp>
      {pennding && <Loading />}
      <Crumb type={"首頁"} title={getCrumb()} />
      <div className="search-bar">
        <CitySelect setCity={setCity} city={city} />
        {searchData.type === "activity" && <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="MM/yyyy" showMonthYearPicker />}
        <input
          className="search-input"
          placeholder={`${placeholderConfig[searchData.type]}請輸入關鍵字`}
          value={keyword}
          onChange={(e) => {
            console.log("ffsdfdfs", e.target.value);
            setKeyword(e.target.value);
          }}
        />
        <input className="search-input2" placeholder={`請輸入關鍵字`} value={str} onChange={handleChange} />
        <button className="search-btn" onClick={saveSearchData}>
          <FontAwesomeIcon icon={faSearch} />
          搜尋
        </button>
      </div>
      <SearchResultComp>
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
          {result.length === 0 && (
            <div className="no-data">
              　<FontAwesomeIcon icon={faFileAlt} />
              <p>查無資料</p>
              <p>請重新查詢</p>
            </div>
          )}
        </div>
      </SearchResultComp>
    </SearchPageComp>
  );
}

export default Index;
