import React from "react";
import "./contacts.css";
import CUP from "../../assets/images/hote_cup.png";
import Logo from "../../assets/images/hoté_intl.png";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// const API_KEY = "4OVsYnRo7iOcJ8D";

const markerIcon = new L.Icon({
  iconUrl: require("../../assets/images/hoté_intl_logo.png"),
  iconSize: [35, 35],
  iconAnchor: [17, 45],
  popupAnchor: [0, -40],
});

const latitude = 10.9860;
const longitude = 76.2389;

// const position = [latitude, longitude];

const Contacts = () => {
  return (
    <div className="contacts GenFlex">
      <h2>Contact Us</h2>
      <div className="contacts_container GenFlex">
        <div className="contact_image_sec">
          <img src={CUP} alt="cup" />
        </div>
        <div className="contact_details">
          <img src={Logo}alt="logo" className="written_logo" />
          <p>Bypass road ,</p>
          <p>Perinthalmanna , </p>
          <p>Malappuram Dt. Kerala. </p>
          <p>Zip : 679322</p>
          <p>Ph : +91 755 886 4266 </p>
        </div>
        <div className="contact_map">

          <MapContainer
            center={[latitude, longitude]}
            zoom={13}
            scrollWheelZoom={false}
            style={{width:"400px",height:"300px"}}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[latitude, longitude]} icon={markerIcon}>
              <Popup>hoté intl</Popup>
            </Marker>
          </MapContainer>
          
        </div>
      </div>
    </div>
  );
};

export default Contacts;
