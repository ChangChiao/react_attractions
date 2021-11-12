import React from "react";

function InfoCardSpot({ data }) {
  return (
    <div className="detail">
      <p>
        <strong className="focus">開放時間:</strong>
        {data.OpenTime}
      </p>
      <p>
        <strong className="focus">服務電話:</strong>
        <a href={`tel:${data.Phone}`}>{data.Phone}</a>
      </p>
      <p>
        <strong className="focus">景點地址:</strong>
        {data.Address}
      </p>
      {/* <p>
            <strong className="focus">官方網站:</strong>

          </p> */}
      <p>
        <strong className="focus">票價資訊:</strong>
        {data.TicketInfo}
      </p>
      <p>
        <strong className="focus">注意事項:</strong>
        {data.Remarks || "無"}
      </p>
    </div>
  );
}

export default InfoCardSpot;
