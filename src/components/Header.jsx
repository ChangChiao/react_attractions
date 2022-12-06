import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { MENU_LIST } from "@/global/constant";
import { setSearchData } from "@/store/slice/searchDataSlice";

const titleStyle = css`
  color: var(--green);
  letter-spacing: 5px;
  font-size: 20px;
  cursor: pointer;
`;

const HeaderComp = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  border-bottom: 1px solid #ccc;
  @media (max-width: 980px) {
    display: none;
  }
  h1 {
    ${titleStyle}
  }
  .logo {
    cursor: pointer;
  }
`;

const MenuComp = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 980px) {
    display: none;
  }
  li {
    margin: 0 10px;
    cursor: pointer;
    &:hover {
      color: var(--green);
    }
  }
`;

const MobileComp = styled.header`
  width: 100%;
  height: 50px;
  text-align: center;
  position: relative;
  line-height: 50px;
  display: none;
  h1 {
    ${titleStyle}
  }
  .logo {
    cursor: pointer;
    padding-top: 10px;
  }
  @media (max-width: 980px) {
    display: block;
  }
`;

const MobileMenu = styled.ul`
  width: 100%;
  height: calc(100vh - 50px);
  position: fixed;
  top: 50px;
  z-index: 100;
  background: var(--green);
  li {
    color: #fff;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-bottom: 1px solid var(--line);
  }
`;

const HamburgerComp = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  position: absolute;
  right: 10px;
  top: 5px;
  background: var(--green);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  &:hover {
    cursor: pointer;
  }
  ${(props) =>
    props.active &&
    css`
      .line {
        &:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:nth-child(3) {
          transform: translateY(-10px) rotate(-45deg);
        }
      }
    `}

  .line {
    width: 30px;
    height: 3px;
    background-color: #ecf0f1;
    display: block;
    margin: 3px 0;
    transition: all 0.3s ease-in-out;
  }
`;
function Header() {
  const [active, setActive] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleClick = (path) => {
    const dataObj = {
      type: path,
    };
    dispatch(setSearchData(dataObj));
    setActive(false);
    history.push("/search");
  };

  const goHome = () => {
    setActive(false);
    history.push("/");
  };

  const controlMenu = () => {
    setActive((prevState) => {
      return !prevState;
    });
  };

  useEffect(() => {
    if (active) {
      document.body.style = "position:fixed";
    } else {
      document.body.style = "";
    }
  }, [active]);
  return (
    <>
      <HeaderComp>
        <img className="logo" onClick={goHome} src={process.env.PUBLIC_URL + `/image/logo.png`} />
        {/* <h1 onClick={goHome}>台灣走走 • Tai Walk</h1> */}
        <MenuComp>
          {MENU_LIST.map((vo) => {
            return (
              <li
                key={vo.name}
                onClick={() => {
                  handleClick(vo.path);
                }}
              >
                {vo.name}
              </li>
            );
          })}
        </MenuComp>
      </HeaderComp>
      <MobileComp>
        <img className="logo" onClick={goHome} src={process.env.PUBLIC_URL + `/image/logo-mobile.png`} />
        <HamburgerComp active={active} onClick={controlMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </HamburgerComp>
      </MobileComp>
      {active && (
        <MobileMenu>
          {MENU_LIST.map((vo) => {
            return (
              <li
                key={"m" + vo.name}
                onClick={() => {
                  handleClick(vo.path);
                }}
              >
                {vo.name}
              </li>
            );
          })}
        </MobileMenu>
      )}
    </>
  );
}

export default Header;
