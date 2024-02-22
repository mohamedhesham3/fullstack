import Home from "./home/Home";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./global.css";
import { Leauge } from "./Leauge/Leauge";
import { useState } from "react";
import { Valorant } from "./Valorant/Valorant";
import { Data } from "./HELP/Context";
import Sumbitpage from "./SUBMITDATA-WINDOW/Sumbitpage";
function App() {
  const [link, setLink] = useState("https://www.youtube.com/embed/");
  const [rank, setRank] = useState("");
  const [category, setCategory] = useState("");
  const [reslut, setResult] = useState(false);
  const [arr, setArr] = useState([]);
  const [rankresult, setrAnkresult] = useState("");
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [choosecate, setChoosecate] = useState(false);
  const [theme, setTheme] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [headerbtn, setHeaderbtn] = useState(false);
  const [valorant, setValorant] = useState(false);

  return (
    <BrowserRouter>
      <Data.Provider
        value={{
          link,
          setLink,
          rank,
          setRank,
          category,
          setCategory,
          reslut,
          setResult,
          arr,
          setArr,
          rankresult,
          setrAnkresult,
          index,
          setIndex,
          displayText,
          setDisplayText,
          theme,
          setTheme,
          Loading, setLoading,headerbtn, setHeaderbtn,choosecate, setChoosecate,valorant, setValorant
  
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/league" element={<Leauge />} />
          <Route path="/submit" element={<Sumbitpage />} />
          <Route path="/league/submit" element={<Sumbitpage />} />
          <Route path="/Valorant" element={<Valorant />} />
        </Routes>
      </Data.Provider>
    </BrowserRouter>
  );
}

export default App;
