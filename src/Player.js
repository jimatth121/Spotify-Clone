import React from 'react'
import Body from './Body'
import Footer from './Footer'
import SideBar from './SideBar'
import './player.css'

const Player = (spotify) => {
  return (
    <div className='player'>
      <div className='player__body'>
       <SideBar/>
        <Body spotify={spotify}/>
      </div>

     <Footer/>
    </div>
  )
}

export default Player
