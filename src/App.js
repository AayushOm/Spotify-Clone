import './App.css';
import Login from './components/Login';
import Player from './components/Player'
import { useEffect } from 'react';
import { getTokenfromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from './components/DataLayer';

const spotify=new SpotifyWebApi();

function App() {

  // eslint-disable-next-line
  const [{user,token},dispatch]=useDataLayerValue();

  useEffect(()=>{
    const hash=getTokenfromUrl();
    window.location.hash="";
    const _token=hash.access_token ;
    if(_token)
    {
      dispatch({
        type: "SET_TOKEN",
        token:_token,
      })

      spotify.setAccessToken(_token);
      spotify.getMe().then((user)=>{
      dispatch({
        type:"SET_USER",
        user:user
      })
      })
      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type:"SET_PLAYLISTS",
          playlists:playlists,
        })
      })
      spotify.getPlaylist("0eGeAiDEgxPIrSwtHhU0Jc").then((response)=>{
        dispatch({
          type:"SET_DISCOVER_WEEKLY",
          discover_weekly:response,
        })
      })

  // eslint-disable-next-line
  }},[])


  return (
    <div className="App">
      {token?<Player spotify={spotify} />:<Login/>}
    </div>
  );
}

export default App;
