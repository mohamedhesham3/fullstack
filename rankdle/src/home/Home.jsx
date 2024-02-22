import React, { useContext } from 'react'
import Games from '../Games/Games'
import { Logo } from '../logo/Logo'
import Header from '../header/Header'
import "../global.css"
const Home = () => {
  return (
    <div>
<Header/>

<Games/>


    </div>
  )
}

export default Home