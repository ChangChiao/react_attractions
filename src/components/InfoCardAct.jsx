import React from "react";
import { transDate } from "../utils/common";
function InfoCardAct({ data }) {
  return (
    <div className="detail">
      <p>
        <strong className="focus">活動時間:</strong>
        {`${transDate(data.StartTime)}-${transDate(data.EndTime)}`}
      </p>
      {/* <p>
            <strong className="focus">聯絡電話:</strong>
            {data.Phone}
          </p> */}
      <p>
        <strong className="focus">主辦單位:</strong>
        {data.Organizer}
      </p>
      <p>
        <strong className="focus">活動地點:</strong>
        {data.Address}
      </p>
      {/* <p>
            <strong className="focus">官方網站:</strong>

          </p>
          <p>
            <strong className="focus">活動費用:</strong>
            {data.Remarks}
          </p>
          <p>
            <strong className="focus">注意事項:</strong>
            {data.Remarks}
          </p> */}
    </div>
  );
}

export default InfoCardAct;
