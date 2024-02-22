import React, { useContext } from "react";
import "../global.css";
import { Logo } from "../logo/Logo";
import Btn from "../button/Btn";
import { MdDarkMode } from "react-icons/md";
import { Data } from "../HELP/Context";

const Header = () => {
  const { theme, setTheme,headerbtn, setHeaderbtn } = useContext(Data);

  const darkModeToggle = () => {
    setTheme(!theme);
      
    if (!theme) {
      document.body.style.backgroundColor = "white";
      document.querySelectorAll("h1,input-selector").forEach((element) => {
        element.style.color = "black";
        
      });
    } else {
      document.body.style.backgroundColor = "#1a1a1a";
      document.querySelectorAll("h1").forEach((element) => {
        element.style.color = "white";

      });
    }
  };




  return (
    <header>
      <Logo />
      {
  window.location.pathname === "/league/submit" || window.location.pathname === "/submit"  ? null : <Btn />
}

      <div onClick={darkModeToggle}>
       {theme ? <MdDarkMode style={{color:"black"}} className="icon" /> :<MdDarkMode style={{color:"gold"}} className="icon" />  }  
      </div>
    </header>
  );
};

export default Header;
