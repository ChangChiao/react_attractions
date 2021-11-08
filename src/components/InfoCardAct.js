import React from "react";
import { transDate } from "../utils/common";
function InfoCardAct({ data }) {
  return (
    <div className="detail">
      <p>
        <h3 className="focus">活動時間:</h3>
        {`${transDate(data.StartTime)}-${transDate(data.EndTime)}`}
      </p>
      {/* <p>
            <h3 className="focus">聯絡電話:</h3>
            {data.Phone}
          </p> */}
      <p>
        <h3 className="focus">主辦單位:</h3>
        {data.Organizer}
      </p>
      <p>
        <h3 className="focus">活動地點:</h3>
        {data.Address}
      </p>
      {/* <p>
            <h3 className="focus">官方網站:</h3>

          </p>
          <p>
            <h3 className="focus">活動費用:</h3>
            {data.Remarks}
          </p>
          <p>
            <h3 className="focus">注意事項:</h3>
            {data.Remarks}
          </p> */}
    </div>
  );
}

export default InfoCardAct;
