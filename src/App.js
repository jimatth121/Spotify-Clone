import { useEffect,  } from 'react';
import './App.css';
import Login from './Login';
import {getTokenFromUrl} from './spotify'
import SpotifyWebApi from "spotify-web-api-js"
import Player from './Player';
import {DataLayerValue} from './DataLayer'

const spotify = new SpotifyWebApi()
function App() { 

  // const [token, setToken]= useState(null);
  const  [{ token}, dispatch] = DataLayerValue()


useEffect(()=>{
const hash = getTokenFromUrl()
window.location.hash = ""
const _token = hash.access_token
 
if(_token){
  // setToken(_token)
  dispatch({
    type:'SET_TOKEN',
    payload: _token
  })
}else{
  return
}

spotify.setAccessToken(_token)

spotify.getMe().then(user=>{
  dispatch({
    type:'SET_USER',
    payload:user
  })
})

spotify.getUserPlaylists().then(playlists=>{
  dispatch({
    type:'SET_PLAYLISTS',
    payload: playlists
  })
})

spotify.getPlaylist("37i9dQZEVXcDt5zSpMrBJL").then(response =>{
  return  dispatch({
    type:'SET_DISCOVER_WEEKLY',
    payload:response
  })
})

},[]);

// Run code base on a given condition
  return (
    <div className="App">
    {token ? (
    <Player spotify={spotify}/>) : (<Login/>) }
    </div>
  );
}

export default App;
