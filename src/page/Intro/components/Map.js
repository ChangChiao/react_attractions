import React from "react";
import GoogleMapReact from "google-map-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
const Mark = () => <FontAwesomeIcon className="mark" icon={faMapMarkerAlt} />;

function Map({ Position = {} }) {
  console.log("Position", Position);
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        defaultCenter={{
          lat: Position.PositionLat || "22.63",
          lng: Position.PositionLon || "121.5073",
        }}
        defaultZoom={12}
      >
        <Mark lat={Position.PositionLat} lng={Position.PositionLon} />
      </GoogleMapReact>
    </div>
  );
}

export default Map;
