import React, { useEffect, useState, useContext } from "react";
import "../global.css";
import { Data } from "../HELP/Context";
import Header from "../header/Header";
import Ranks from "../Ranks/Ranks";

export const Valorant = () => {
  const {
    link,
    setLink,
    rank,
    setRank,
    category,
    setCategory,
    arr,
    setArr,
    index,
    setIndex,
    reslut,
    setResult,
  } = useContext(Data);

  useEffect(() => {
    fetch("http://localhost:3000/Valorant")
      .then((res) => res.json())
      .then((data) => setArr(data[index].link))
      .catch((error) => console.error("Error fetching data:", error));
    }, [index]);
  return (
    <div>
      {reslut ? <div className="blur"></div> : null}

      <Header />
      <div className="league-section">
        <h1>Valorant</h1>
        {
    <iframe
  src={`${arr}?autoplay=0`}
  title="YouTube video: An explanation of what human rights are — presented in New Zealand sign Language"
  width="900"
  height="750"
  allowfullscreen
></iframe>

        }
        <Ranks/>

      </div>
    </div>
  );
};
