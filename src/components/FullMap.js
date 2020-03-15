import React, {useState} from 'react';
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";

const icon = new Icon({
  iconUrl: "/mountain.svg",
  iconSize: [25, 25]
});

const FullMap = ({ filterClimbs }) => {
  const [activeClimb, setActiveClimb] = useState(null);

    return (
      <div>
        <Map center={[40.65, -111.91]} zoom={12}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {filterClimbs.map(climb => (
            <Marker
              key={climb.id}
              position={[climb.latitude, climb.longitude]}
              onClick={() => {
                setActiveClimb(climb);
              }}
              icon={icon}
            />
          ))}

          {activeClimb && (
            <Popup
              position={[
                activeClimb.latitude,
                activeClimb.longitude
              ]}
              onClose={() => {
                setActiveClimb(null);
              }}
            >
              <div>
                <h2>{activeClimb.name}</h2>
                <div className = 'info'>
                  Difficulty: <b>{activeClimb.rating}</b>
                  <br></br>
                  Stars: <b>{activeClimb.stars}</b>
                  <br></br>
                  Type: <b>{activeClimb.type}</b>
                </div>
              </div>
            </Popup>
          )}
        </Map>
      </div>       
    )
  }
  
export default FullMap