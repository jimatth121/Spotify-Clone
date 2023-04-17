import React from 'react'
import './SideBar.css'
import SideBarOption from './SideBarOption'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { DataLayerValue } from './DataLayer';

const SideBar = () => {

  const [{playlists}, ] = DataLayerValue()
  console.log('what happen here',playlists);
  return (
    <div className='sidebar'>
     <img
     className='sidebar__logo' src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green-768x231.png" alt=''/>

     <SideBarOption Icon={HomeIcon} title='Home' />
     <SideBarOption Icon={SearchIcon} title='Search' />
     <SideBarOption Icon={LibraryMusicIcon} title='Yoyr Library' />
    <br/>
      <strong className='sidebar__title'>PLAYLISTS</strong>
      <hr/>
      {playlists?.items?.map(playlist=>(
        <SideBarOption key={playlist.index} title={playlist.name}/>
     ) )}
    </div>
  )
}

export default SideBar
