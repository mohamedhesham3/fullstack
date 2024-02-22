import { useContext, useEffect } from "react";
import { Data } from "../HELP/Context";
import "../global.css";
const Results = () => {
  const {
    link,
    setLink,
    rank,
    setRank,
    category,
    setCategory,
    reslut,
    setResult,
    Loading,
    setLoading,
    arr,
    setArr,
    rankresult,
    setrAnkresult,
    index,
    setIndex,
    displayText,
    setDisplayText,
  } = useContext(Data);
  useEffect(() => {
    if (window.location.pathname === "/Valorant") {
      fetch("http://localhost:3000/Valorant")
        .then((res) => res.json())
        .then((data) => setrAnkresult(data[index].rank));

      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 670);
    } else {
      fetch("http://localhost:3000/league")
      .then((res) => res.json())
      .then((data) => setrAnkresult(data[index].rank));
      
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 670);
    }
  }, [index]);

  const name = () => {
    setIndex(index + 1);

    if (index === rank[index]) {
      setIndex(0);
    }
    setResult(!reslut);
  };

  const remove = () => {
    setResult(!reslut);
  };

  
  const iron = "https://rankdle.com/static/media/Iron.e4556e0b114423a76732.png";
  const bronze =
    "https://rankdle.com/static/media/Bronze.f2a336815b4f351c33bb.png";
  const silver =
    "https://rankdle.com/static/media/Silver.57cd0a9edc83de9c0586.png";
  const gold = "https://rankdle.com/static/media/Gold.1aa833f7d48593e1b875.png";
  const plat =
    "https://rankdle.com/static/media/Platinum.45044e3db4fc68cecab2.png";
  const diamond =
    "https://rankdle.com/static/media/Diamond.fce634e3e5f5a6f33ce7.png";
  const master =
    "https://rankdle.com/static/media/Master.f5cfb597949e570d86ea.png";
  const GRANDMASTER =
    "https://rankdle.com/static/media/Grand%20Master.e8c70d228a2555c5ef07.png";
  const CHALLNGER =
    "https://rankdle.com/static/media/Challenger.e3ea6f5f12dca03b34c6.png";

  const iron1 =
    "https://rankdle.com/static/media/Iron.7a3690c3d8e270356fc1.png";
  const bronze1 =
    "https://rankdle.com/static/media/Bronze.88577ece5bbcb113b001.png";
  const silver1 =
    "https://rankdle.com/static/media/Silver.d48e9a135e0cb642db64.png";
  const gold1 =
    "https://rankdle.com/static/media/Gold.3615d085516ae70db245.png";
  const plat1 =
    "https://rankdle.com/static/media/Platinum.8f6a8b1722ff7cbf1678.png";
  const diamond1 =
    "https://rankdle.com/static/media/Diamond.f0613e96229c4c95b3d0.png";
  const Immortal =
    "https://rankdle.com/static/media/Immortal.1cc0259a84d625f7f010.png";
  const Ascendant =
    "https://rankdle.com/static/media/Ascendant.4c9a0938e3f331f4ae07.png";
  const Radiant =
    "https://rankdle.com/static/media/Radiant.f2cffd2f8cd0e91d08f3.png";
console.log(displayText,iron1,rankresult);

  return (
    <>
      {Loading ? (
        <div className="custom-loader"></div>
      ) : (
        <div className="Results">
          <div onClick={remove} className="exit">
            X
          </div>
          <div className="cp">
            <h1>Clip Result</h1>
          </div>

          {window.location.pathname === "/Valorant" ? (
            <div className="rt">
              <h4>your guess:{displayText}</h4>
              {displayText === "iron" ? <img src={iron1} alt="" /> : null}
              {displayText === "Bronze" ? <img src={bronze1} alt="" /> : null}
              {displayText === "Silver" ? <img src={silver1} alt="" /> : null}
              {displayText === "Gold" ? <img src={gold1} alt="" /> : null}
              {displayText === "Platinum" ? <img src={plat1} alt="" /> : null}
              {displayText === "Diamond" ? <img src={diamond1} alt="" /> : null}
              {displayText === "Immortal" ? <img src={Immortal} alt="" /> : null}
              {displayText === "Ascendant" ? <img src={Ascendant} alt="" /> : null}
              {displayText === "Radiant" ? <img src={Radiant} alt="" /> : null}
              {/* correct ranks */}

              <h4>correct rank:{rankresult}</h4>

              {rankresult === "iron" ? <img src={iron1} alt="" /> : null}
              {rankresult === "Bronze" ? <img src={bronze1} alt="" /> : null}
              {rankresult === "Silver" ? <img src={silver1} alt="" /> : null}
              {rankresult === "Gold" ? <img src={gold1} alt="" /> : null}
              {rankresult === "Platinum" ? <img src={plat1} alt="" /> : null}
              {rankresult === "Diamond" ? <img src={diamond1} alt="" /> : null}
              {rankresult === "Immortal" ? <img src={Ascendant} alt="" /> : null}
              {rankresult === "Ascendant" ? (
                <img src={GRANDMASTER} alt="" />
              ) : null}
              {rankresult === "Radiant" ? (
                <img src={Radiant} alt="" />
              ) : null}
            </div>
          ) :
          
          
          
          (
            <div className="rt">
              <h4>your guess:{displayText}</h4>
              {displayText === "iron" ? <img src={iron} alt="" /> : null}
              {displayText === "Bronze" ? <img src={bronze} alt="" /> : null}
              {displayText === "Silver" ? <img src={silver} alt="" /> : null}
              {displayText === "Gold" ? <img src={gold} alt="" /> : null}
              {displayText === "Platinum" ? <img src={plat} alt="" /> : null}
              {displayText === "Diamond" ? <img src={diamond} alt="" /> : null}
              {displayText === "Master" ? <img src={master} alt="" /> : null}
              {displayText === "GRANDMASTER" ? (
                <img src={GRANDMASTER} alt="" />
              ) : null}
              {displayText === "CHALLNGER" ? (
                <img src={CHALLNGER} alt="" />
              ) : null}
              {/* correct ranks */}

              <h4>correct rank:{rankresult}</h4>

              {rankresult === "iron" ? <img src={iron} alt="" /> : null}
              {rankresult === "Bronze" ? <img src={bronze} alt="" /> : null}
              {rankresult === "Silver" ? <img src={silver} alt="" /> : null}
              {rankresult === "Gold" ? <img src={gold} alt="" /> : null}
              {rankresult === "Platinum" ? <img src={plat} alt="" /> : null}
              {rankresult === "Diamond" ? <img src={diamond} alt="" /> : null}
              {rankresult === "Master" ? <img src={master} alt="" /> : null}
              {rankresult === "GRANDMASTER" ? (
                <img src={GRANDMASTER} alt="" />
              ) : null}
              {rankresult === "CHALLNGER" ? (
                <img src={CHALLNGER} alt="" />
              ) : null}
            </div>
          )}

          <div className="btn1">
            <button onClick={name}>Next clip</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Results;
