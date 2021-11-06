import React, { useState } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAtom } from "@fortawesome/free-solid-svg-icons";
const Menu = styled.div`
  width: 240px;
  height: 100vh;
  background: var(--purple);
  color: #fff;
  padding-top: 50px;
  img {
    width: 65%;
    display: block;
    margin: auto;
  }
  .level1 {
    padding-top: 50%;
    li {
      padding: 4px 0;
      cursor: pointer;
      &:hover {
        p {
          background: var(--purple_light);
        }
      }
    }
  }
  .level2 {
    padding: 8px 0;
    li {
      display: flex;
      padding: 8px 0;
      justify-content: center;
      span {
        color: #fff;
      }
    }
  }
  p {
    padding: 16px 0;
    display: flex;
    justify-content: center;
    color: #fff;
    &.active {
      background: var(--purple_light);
    }
    span {
      width: 40%;
      color: #fff;
      text-align: left;
    }
    i {
      display: block;
      width: 20%;
      color: #fff;
    }
  }
`;

function SideBar() {
  const history = useHistory();
  const location = useLocation();
  const [nowActive, setNowActive] = useState("");
  const list = [
    { id: "menu", name: "Dashboard", icon: "menu", link: "/", subList: [] },
    {
      id: "log",
      name: "線路群組",
      icon: "share",
      link: "/log",
      subList: [{ name: "test1" }, { name: "test2" }, { name: "test3" }],
    },
    { id: "waf", name: "帳號管理", icon: "people", link: "/waf", subList: [] },
    { id: "dns", name: "DNS管理", icon: "globe", link: "/dns", subList: [] },
    { id: "wan", name: "主選項", icon: "layer", link: "/wan", subList: [] },
    { id: "log", name: "log test", icon: "layer", link: "/log", subList: [] },
  ];
  const handleClick = ({ id, link, subList }) => {
    setNowActive(id);
    if (subList.length === 0) {
      history.push(link);
    }
  };
  return (
    <Menu>
      <FontAwesomeIcon icon={faAtom} />
      <Link to="/">
        <img src={`/image/logo_${location.pathname.substring(1)}.png`} alt="" />
      </Link>
      <ul className="level1">
        {list.map((item, i) => {
          return (
            <li key={i + "sid"} onClick={() => handleClick(item)}>
              <p className={location.pathname === item.link ? "active" : ""}>
                <span>{item.name}</span>
              </p>
              {nowActive === item.id && (
                <ul className="level2">
                  {item.subList.map((vo, k) => {
                    return (
                      <li key={k + "sub"}>
                        <span>{vo.name}</span>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </Menu>
  );
}

export default SideBar;
