import React from "react";
import "./contacts.css";
import  data  from "../../data.json";


const Contacts = () => {
  const mapData = data.data
  console.log(mapData)
  return (
    <div className="contacts_container GenFlex">
      {mapData.map(({ name, item, image }) => (
        <div key={item}>
          {console.log(image)}
          <p>{item}</p>
          <h2>{name}</h2>
          <img src={require(`${image}`)} alt="item" style={{width:"250px"}}/>
        </div>
      ))}
    </div>
  );
};

export default Contacts;
