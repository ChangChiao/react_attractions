import React from "react";
import usePortal from "react-useportal";
import styled from "styled-components";

const LoadComp = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  .load-container {
    position: absolute;
    width: 200px;
    height: 50px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    display: flex;
    justify-content: center;
  }
  .letter {
    color: #fff;
    animation-name: loading;
    animation-duration: 1.6s;
    animation-iteration-count: infinite;
    animation-direction: linear;
    font-size: 20px;
  }

  @for $i from 1 to 10 {
    .l-#{$i} {
      animation-delay: 0.48s + $i * 0.12s;
    }
  }

  @keyframes loading {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

function Loading() {
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
      <LoadComp>
        <div className="load-container">
          <div className="l-1 letter">L</div>
          <div className="l-2 letter">o</div>
          <div className="l-3 letter">a</div>
          <div className="l-4 letter">d</div>
          <div className="l-5 letter">i</div>
          <div className="l-6 letter">n</div>
          <div className="l-7 letter">g</div>
          <div className="l-8 letter">.</div>
          <div className="l-9 letter">.</div>
          <div className="l-10 letter">.</div>
        </div>
      </LoadComp>
    </Portal>
  );
}

export default Loading;
