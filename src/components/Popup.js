import React from "react";
import styled from "styled-components";
import usePortal from "react-useportal";
const PopComponent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  input,
  textarea {
    box-shadow: none;
    background: #f0f3ff;
    width: calc(100% - 50px);
  }
  .mask {
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
  }
  .pop-container {
    text-align: center;
    width: 500px;
    max-height: 500px;
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    padding: 10px 0 20px;
    &.large {
      width: 800px;
      height: 600px;
    }
    &.small {
      width: 250px;
      height: 250px;
    }
  }
  .header {
    text-align: center;
    padding-top: 10px;
    i {
      position: absolute;
      right: 20px;
      top: 20px;
      cursor: pointer;
    }
  }
  .popup-list {
    width: 80%;
    margin: 0 auto;
    li {
      display: flex;
      height: 50px;
      align-items: center;
      .list-title {
        display: block;
        width: 30%;
        text-align: left;
      }
    }
  }
  .footer {
    margin-top: 20px;
  }
`;

function Popup(props) {
  const { Portal } = usePortal({
    onOpen({ portal }) {
      portal.current.style.cssText = `
            /* add your css here for the Portal */
            position: fixed;
            width: 100vw;
            height: 100vh;
            transform: translate(-50%,-50%);
            z-index: 1000;
          `;
    },
  });

  return (
    <Portal>
      <PopComponent>
        <div className="mask"></div>
        <div className={`pop-container block ${props.size}`}>
          <div className="header">{props.header}</div>
          <div className="container">{props.children}</div>
          <div className="footer">{props.footer}</div>
        </div>
      </PopComponent>
    </Portal>
  );
}

export default Popup;
