import React, { useEffect, useState } from "react";
import data from "./data.json";
import Categories from "./Categories";
import Car from "./car_list";
import { BsFillCarFrontFill } from "react-icons/bs";
import "./App.css";

function App() {
  const [details, setDetails] = useState(data);

  useEffect(()=>{
    setDetails(data)
  },[]);

  const SelectCategory= (category)=> {
    let newselect = data.filter((select) => select.category === category);
    setDetails(newselect);
  }

  return (
    <main className="container">
      <div className="title">
        <h1>
          Check Cars <BsFillCarFrontFill color="#874752" />
        </h1>
        <div className="underline"></div>
      </div>
      <div className="box">
        <Categories SelectCategory={SelectCategory} />
        <Car details={details} />
      </div>
    </main>
  );
}

export default App;
