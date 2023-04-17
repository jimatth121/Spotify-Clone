import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import { DataLayerValue } from './DataLayer';

const Header = () => {
    const [{user}, ] = DataLayerValue()

  return (
    <div className='header'>
      <div className='header__left'>
        <SearchIcon/>
        <input placeholder='Search for Artist, Songs and Album'/>
      </div>
      <div className='header__right'>
        <Avatar src={user?.images[0].url} alt='GM'/>
        <h4>{user?.display_name}</h4>
      </div>

    </div>
  )
}

export default Header
