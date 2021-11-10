import React from "react";
import usePortal from "react-useportal";

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
      <div class="load">
        <div class="load-container">
          <div class="l-1 letter">L</div>
          <div class="l-2 letter">o</div>
          <div class="l-3 letter">a</div>
          <div class="l-4 letter">d</div>
          <div class="l-5 letter">i</div>
          <div class="l-6 letter">n</div>
          <div class="l-7 letter">g</div>
          <div class="l-8 letter">.</div>
          <div class="l-9 letter">.</div>
          <div class="l-10 letter">.</div>
        </div>
      </div>
    </Portal>
  );
}

export default Loading;
