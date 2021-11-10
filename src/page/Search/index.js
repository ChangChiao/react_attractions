import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CitySelect from "../../components/CitySelect";
import ListCard from "../../components/ListCard";
import Crumb from "../../components/Crumb";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { TYPE_LIST } from "../../global/constant";
import { setSearchData } from "../../store/slice/searchDataSlice";
import { getActivity, getSpot, getRestaurant } from "../../utils/api";
import DatePicker from "react-datepicker";
import Loading from "../../components/Loading";

function Index() {
  let endFlag = false;
  let skip = 0;
  const dispatch = useDispatch();
  const [result, setResult] = useState([]);
  const [city, setCity] = useState("");
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
        svg {
          color: var(--green);
        }
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
    resetSearch();
    dispatch(setSearchData(dataObj));
    // history.push("/search");
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

  const getData = async () => {
    let list = [];
    const { keyword, city } = searchData;
    console.log("startDate", startDate);
    let [month, year] = [11, 2021];
    // let [month, year] = startDate.split("/");
    let nameStr = keyword ? `Name eq '${keyword}'` : "";
    let monthStr = month ? `month(StartTime) eq ${month}` : "";
    let yearStr = year ? `year(StartTime) eq ${year}` : "";
    const sendData = {
      $top: 30,
      $skip: skip,
      $filter: chainStr([nameStr, monthStr, yearStr]),
      city: city?.value,
    };
    setPennding(true);
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
  };

  const loadMore = () => {
    if (endFlag) return;
    skip += 30;
    getData();
    console.log("3333");
  };

  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    console.log("scroll", e.target.scrollTop);
    bottom && loadMore();
  };

  useEffect(() => {
    window.onscroll = function () {
      if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
        console.log("At the bottom!");
        loadMore();
      }
    };

    // document.addEventListener("scroll", (e) => {
    //   const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    //   console.log("scroll", e.target.scrollTop);
    //   bottom && loadMore();
    // });
  }, []);

  useEffect(() => {
    getCrumb();
    getData();
    console.log("2222");
  }, [searchData]);

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
            setKeyword(e.target.value);
          }}
        />
        <button className="search-btn" onClick={saveSearchData}>
          <FontAwesomeIcon icon={faSearch} />
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
          {result.length === 0 && (
            <div>
              　<FontAwesomeIcon icon={faFileAlt} />
              <p>查無資料</p>
              <p>請重新查詢</p>
            </div>
          )}
        </div>
      </div>
    </SearchPageComp>
  );
}

export default Index;
