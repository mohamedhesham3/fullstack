import React from "react";
import "../global.css";
import { useNavigate } from "react-router-dom";
const Games = () => {
  const nav=useNavigate()
  
  return (
    <div className="games">
      <h1>Games Available</h1>
      <section>
      
      <img
        onClick={() => nav('league')}
        className="league"
        src="https://howlongtobeat.com/games/5203_League_of_Legends.jpg"
        alt=""
      />


        <img
          className="csgo"
          src="https://static.displate.com/280x392/displate/2023-06-12/6e217abc7f5bb5d0dc56e68752193a11_5c51574f5f2f216f9ef25a0d08fa6400.jpg"
          alt=""
        />
        <img
        onClick={() => {
          nav("Valorant")
        }}
          className="valorant"
          src="https://m.media-amazon.com/images/M/MV5BNmNhM2NjMTgtNmIyZC00ZmVjLTk4YWItZmZjNGY2NThiNDhkXkEyXkFqcGdeQXVyODU4MDU1NjU@._V1_FMjpg_UX1000_.jpg"
          alt=""
        />
      </section>
    </div>
  );
};

export default Games;
