import React from "react";
import Nav from "../components/Nav";
import { withRouter } from "react-router-dom";
import style from "../style/page/index.module.scss";
import { showToast } from "../utils/common";
function Index(props) {
  const notify = () => showToast("🦄Wow so easy!", "error");
  const list = [
    { name: "線路管家", img: "logo_wan", link: "/wan" },
    { name: "智能DBA", img: "logo_log", link: "/log" },
    { name: "域名管家", img: "logo_dns", link: "/dns" },
    { name: "SWAF", img: "logo_waf", link: "/waf" },
  ];

  const goLink = (link) => {
    props.history.push(link);
  };
  return (
    <div
      className={style.page}
      style={{
        backgroundImage: `url(${"/image/bg2.png"})`,
      }}
    >
      <div className={style.wrapper}>
        <Nav />
        <button onClick={notify}>Notify!</button>
        <ul className={style.panel}>
          {list.map((item, i) => {
            return (
              <li
                key={`index` + i}
                className={style.item}
                onClick={() => {
                  goLink(item.link);
                }}
              >
                <div className={`block ${style.img_box}`}>
                  <img src={`/image/${item.img}.png`} alt="" />
                </div>
                <p>{item.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default withRouter(Index);
