import React from "react";

function InfoCardRest({ data }) {
  return (
    <div className="detail">
      <p>
        <h3 className="focus">營業時間:</h3>
        {data.OpenTime}
      </p>
      <p>
        <h3 className="focus">聯絡電話:</h3>
        <a href={`tel:${data.Phone}`}>{data.Phone}</a>
      </p>
      <p>
        <h3 className="focus">餐廳地址:</h3>
        {data.Address}
      </p>
      <p>
        <h3 className="focus">官方網站:</h3>
        {data.WebsiteUrl ? (
          <a href={data.WebsiteUrl} target="_blank" rel="noreferrer">
            {data.WebsiteUrl}
          </a>
        ) : (
          <span>無</span>
        )}
      </p>
    </div>
  );
}

export default InfoCardRest;
