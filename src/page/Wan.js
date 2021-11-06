import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import DefaultTemp from "../components/DefaultTemp";
import styled from "styled-components";
import DropDown from "../components/DropDown";
const WanComponent = styled.div`
  .title-bar {
    display: flex;
    align-items: center;
    padding: 16px 0;
  }
  .search-bar {
    display: flex;
  }
  .main {
    padding: 10px;
    margin-top: 16px;
    .button-bar {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-bottom: 10px;
      border-bottom: 1px solid #ccc;
    }
  }
  .table {
    margin-top: 10px;
  }
`;

function Wan() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    console.log("data-change", selectedOption);
  }, [selectedOption]);

  return (
    <WanComponent>
      <DefaultTemp>
        <Nav />
        <div className="title-bar">
          <h1 className="title">站點管理 > V1A-國內</h1>
          <button className="btn green-light">變更站點名稱</button>
        </div>
        <div className="search-bar">
          <DropDown defaultValue={selectedOption} onChange={setSelectedOption} options={options} />
          <input type="text" placeholder="站點名稱搜尋" />
          <button className="btn purple"></button>
          <button className="btn purple-light">匯入</button>
          <button className="btn purple-light">匯出</button>
        </div>
        <div className="block main">
          <div className="button-bar">
            <button className="btn red-light">批次刪除</button>
            <button className="btn orange-light">新增域名</button>
          </div>
          <table className="table">
            <thead>
              <tr className="">
                <th>批次</th>
                <th>欄位名稱</th>
                <th>建立時間</th>
                <th>備註</th>
                <th>功能</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>123.123.12.111</td>
                <td>2020-04-09 12:00</td>
                <td>永久封鎖</td>
                <td>
                  <button className="btn rounded red-light">刪除</button>
                  <button className="btn rounded green-light">修改</button>
                  <button className="btn rounded green-light">備註</button>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>123.123.12.111</td>
                <td>2020-04-09 12:00</td>
                <td>永久封鎖</td>
                <td>
                  <button className="btn rounded red-light">刪除</button>
                  <button className="btn rounded green-light">修改</button>
                  <button className="btn rounded green-light">備註</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </DefaultTemp>
    </WanComponent>
  );
}

export default Wan;
