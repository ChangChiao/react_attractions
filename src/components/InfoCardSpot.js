import React from "react";

function InfoCardSpot({ data }) {
  return (
    <div className="detail">
      <p>
        <h3 className="focus">開放時間:</h3>
        {data.OpenTime}
      </p>
      <p>
        <h3 className="focus">服務電話:</h3>
        <a href={`tel:${data.Phone}`}>{data.Phone}</a>
      </p>
      <p>
        <h3 className="focus">景點地址:</h3>
        {data.Address}
      </p>
      {/* <p>
            <h3 className="focus">官方網站:</h3>

          </p> */}
      <p>
        <h3 className="focus">票價資訊:</h3>
        {data.TicketInfo}
      </p>
      <p>
        <h3 className="focus">注意事項:</h3>
        {data.Remarks}
      </p>
    </div>
  );
}

export default InfoCardSpot;
