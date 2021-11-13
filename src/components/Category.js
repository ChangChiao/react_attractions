import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CategoryComp = styled.div`
  padding-top: 50px;
  .list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    .item {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
      width: 23%;
      /* border-radius: 20px; */
      height: 180px;
      background-size: 100%;
      font-size: 20px;
      @media (max-width: 980px) {
        width: 100%;
      }
      p {
        color: #fff;
        transition: 0.2s;
      }
      &:hover {
        p {
          transform: scale(1.1);
          color: #d5e2c8;
        }
      }
    }
  }
`;

const categoryList = {
  activity: [
    { keyword: "節慶", cover: "event_type_1", title: "節慶活動" },
    { keyword: "自行車", cover: "event_type_2", title: "自行車活動" },
    { keyword: "休閒", cover: "event_type_3", title: "遊憩活動" },
    { keyword: "產業", cover: "event_type_4", title: "產業文化活動" },
    { keyword: "2021", cover: "event_type_5", title: "年度活動" },
    { keyword: "秋", cover: "event_type_6", title: "四季活動" },
    { keyword: "", cover: "we", title: "" },
    { keyword: "", cover: "ew", title: "" },
  ],
  spot: [
    { keyword: "風景", cover: "spot_type_1", title: "自然風景類" },
    { keyword: "工廠", cover: "spot_type_2", title: "觀光工廠類" },
    { keyword: "休閒", cover: "spot_type_3", title: "遊憩類" },
    { keyword: "農業", cover: "spot_type_4", title: "休閒農業類" },
    { keyword: "生態", cover: "spot_type_5", title: "生態類" },
    { keyword: "溫泉", cover: "spot_type_6", title: "溫泉類" },
    { keyword: "古蹟", cover: "spot_type_7", title: "古蹟類" },
    { keyword: "", cover: "wq", title: "" },
  ],
  restaurant: [
    { keyword: "特產", cover: "food_type_1", title: "地方特產" },
    { keyword: "中式", cover: "food_type_2", title: "中式美食" },
    { keyword: "甜點", cover: "food_type_3", title: "甜點冰品" },
    { keyword: "異國", cover: "food_type_4", title: "異國料理" },
    { keyword: "伴手禮", cover: "food_type_5", title: "伴手禮" },
    { keyword: "素食", cover: "food_type_6", title: "素食" },
    { keyword: "", cover: "sd", title: "" },
    { keyword: "", cover: "ad", title: "" },
  ],
};
function Category({ type = "spot", setCategory }) {
  const selectCategory = (category) => {
    if (!category) return;
    setCategory(category);
  };

  return (
    <CategoryComp>
      <h2 class="title">熱門主題</h2>
      <ul className="list">
        {type &&
          categoryList[type].map((vo) => {
            return (
              <li
                onClick={() => {
                  selectCategory(vo.keyword);
                }}
                className="item"
                key={vo.cover}
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/image/catagory/${type}/${vo.cover}.png)` }}
              >
                <p>{vo.title}</p>
              </li>
            );
          })}
      </ul>
    </CategoryComp>
  );
}

export default Category;
