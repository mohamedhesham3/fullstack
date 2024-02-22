import React from 'react'
import "../global.css"
import logo from '/Public/logo.png'


export const Logo = () => {
  return (
    <div>
      <img onClick={() => window.location.href='/'} className='logo' src={logo} alt="" />
    </div>
  )
}
