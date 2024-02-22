import React, { useContext } from 'react'
import '../global.css'
import { Data } from '../HELP/Context'
import Results from '../Resluts/Results'
const Ranks = () => {
  const {link,setLink,rank,setRank,category,setCategory,reslut,setResult,arr, setArr,displayText,setDisplayText}=useContext(Data)

const click = (text) => {
  setDisplayText(text)
  setResult(!reslut)

}




  return (
  <>
         { reslut ? <Results/> : null}
    {window.location.pathname==="/Valorant" ?
    <div className='ranks'>
          <img onClick={() => click("iron")} src="https://rankdle.com/static/media/Iron.7a3690c3d8e270356fc1.png" alt="" />
      <img onClick={() => click("Bronze")} src="https://rankdle.com/static/media/Bronze.88577ece5bbcb113b001.png" alt="" />
      <img onClick={() => click("Silver")} src="https://rankdle.com/static/media/Silver.d48e9a135e0cb642db64.png" alt="" />
      <img onClick={() => click("Gold")} src="https://rankdle.com/static/media/Gold.3615d085516ae70db245.png" alt="" />
      <img onClick={() => click("Platinum")} src=	"https://rankdle.com/static/media/Platinum.8f6a8b1722ff7cbf1678.png" alt="" />
      <img onClick={() => click("Diamond")} src="https://rankdle.com/static/media/Diamond.f0613e96229c4c95b3d0.png" alt="" />
      <img onClick={() => click("Ascendant")} src="https://rankdle.com/static/media/Ascendant.4c9a0938e3f331f4ae07.png" alt="" />
      <img onClick={() => click("Immortal")} src="https://rankdle.com/static/media/Immortal.1cc0259a84d625f7f010.png" alt="" />
      <img onClick={() => click("Radiant")} src="https://rankdle.com/static/media/Radiant.f2cffd2f8cd0e91d08f3.png" alt="" />
      </div>
        : 
        <div className='ranks'>
   <img onClick={() => click("iron")} src="https://rankdle.com/static/media/Iron.e4556e0b114423a76732.png" alt="" />
      <img onClick={() => click("Bronze")} src="https://rankdle.com/static/media/Bronze.f2a336815b4f351c33bb.png" alt="" />
      <img onClick={() => click("Silver")} src="https://rankdle.com/static/media/Silver.57cd0a9edc83de9c0586.png" alt="" />
      <img onClick={() => click("Gold")} src="https://rankdle.com/static/media/Gold.1aa833f7d48593e1b875.png" alt="" />
      <img onClick={() => click("Platinum")} src="https://rankdle.com/static/media/Platinum.45044e3db4fc68cecab2.png" alt="" />
      <img onClick={() => click("Diamond")} src="https://rankdle.com/static/media/Diamond.fce634e3e5f5a6f33ce7.png" alt="" />
      <img onClick={() => click("Master")} src="https://rankdle.com/static/media/Master.f5cfb597949e570d86ea.png" alt="" />
      <img onClick={() => click("GRANDMASTER")} src="https://rankdle.com/static/media/Grand%20Master.e8c70d228a2555c5ef07.png" alt="" />
      <img onClick={() => click("CHALLNGER")} src="https://rankdle.com/static/media/Challenger.e3ea6f5f12dca03b34c6.png" alt="" />
</div>}
  </>
  )
}

export default Ranks