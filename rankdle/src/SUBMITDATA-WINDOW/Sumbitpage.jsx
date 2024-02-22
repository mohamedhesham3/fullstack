import React, { useContext, useState } from "react";
import Header from "../header/Header";
import { Data } from "../HELP/Context";
import { useNavigate } from "react-router-dom";

const SubmitPage = () => {
  const {
    link,
    setLink,
    rank,
    setRank,
    category,
    setCategory,
    choosecate,
    setChoosecate,
  } = useContext(Data);

  const [choserank, setChosRank] = useState(false);
  const [error, setError] = useState(false);
  const nav = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if (
      link === "https://www.youtube.com/embed/" ||
      link.length < 22 ||
      category === "" ||
      rank === ""
    ) {
      setError(true);
      setChoosecate(true);
      setChosRank(true);
    } else if (category === "league") { // Corrected the spelling of "League"
      fetch("http://localhost:3000/league", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ link, rank, category }),
      });
    } else if (category === "Valorant") {
      fetch("http://localhost:3000/Valorant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ link, rank, category }),
      });
    }

    nav("/league");
    setLink("https://www.youtube.com/embed/");
    setCategory("Category");
    window.location.reload();
  };

  return (
    <div>
      <Header />
      <div className="datasubmit">
        {link.length > 30 ? (
          <iframe
            width="340"
            height="180"
            src={link}
            title="Can you guess the rank? League of Legends"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ) : (
          <img
            style={{ height: "180px", width: "350px" }}
            src="https://media.istockphoto.com/id/1147544810/vector/no-thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=2-ScbybM7bUYw-nptQXyKKjwRHKQZ9fEIwoWmZG9Zyg="
            alt="thumbnail"
          ></img>
        )}

        <form>
          <div className="notice">
            <li>
              Your link must be like this:https://www.youtube.com/embed/
              <span style={{ color: "red" }}> "Your code"</span>
            </li>
            <li>Video must be from 200s to 300s</li>
          </div>
          {error ? (
            <h3 className="err" style={{ color: "red" }}>
              PUT THE CORRECT LINK
            </h3>
          ) : null}
          <input
            className="link-submit"
            placeholder="your code"
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value.trim())}
          />
          <button className="submit-btn" onClick={submit}>
            submit
          </button>
          {choserank ? <h4 className="char">choose a rank</h4> : null}

          {category === "Valorant" ? (
            <select
              onChange={(e) => {
                setRank(e.target.value);
                setChosRank(false);
              }}
              className="input-selector"
            >
              <option selected="selected">Rank</option>

              <option style={{ cursor: "pointer" }} value="iron">
                iron
              </option>
              <option value="Bronze">Bronze</option>
              <option value="Silver">Silver</option>
              <option value="Gold">Gold</option>
              <option value="Platinum">Platinum</option>
              <option value="Diamond">Diamond</option>
              <option value="Ascendant">Ascendant </option>
              <option value="Immortal">Immortal </option>
              <option value="Radiant">Radiant</option>
            </select>
          ) : (
            <select
              onChange={(e) => {
                setRank(e.target.value);
                setChosRank(false);
              }}
              className="input-selector"
            >
              <option selected="selected">Rank</option>

              <option style={{ cursor: "pointer" }} value="iron">
                iron
              </option>
              <option value="Bronze">Bronze</option>
              <option value="Silver">Silver</option>
              <option value="Gold">Gold</option>
              <option value="Platinum">Platinum</option>
              <option value="Diamond">Diamond</option>
              <option value="Master">Master</option>
              <option value="GRANDMASTER">GRANDMASTER</option>
              <option value="CHALLENGER">CHALLENGER</option> {/* Corrected the spelling of "CHALLENGER" */}
            </select>
          )}

          {choosecate ? (
            <div className="char">
              <h4>choose a game</h4>
            </div>
          ) : null}
          <select
            onChange={(e) => {
              setCategory(e.target.value);
              setChoosecate(false);
            }}
            className="input-selector"
          >
            <option selected="selected">Category</option>
            <option value="league">League of legends</option> {/* Corrected the value to "League" */}
            <option value="CS2">CS2</option>
            <option value="Valorant">Valorant</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default SubmitPage;
