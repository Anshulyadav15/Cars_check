import React from "react";

const Car = ({ details}) => {
  return (
    <div className="section">
      {details.map((item,index) => {
        const { name,image, fueltype, model, description } = item;
        return (
          <div className="right" key={index}>
            <h3>{name}</h3>
            <img src={image} alt={name} />
            <p>Fuel type : {fueltype}</p>
            <p>Model : {model}</p>
            <p>{description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Car;
