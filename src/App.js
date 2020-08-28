import React, { useEffect, useState } from "react";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { getTokenFromResponse } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";

const spotify = new SpotifyWebApi();
const  App = () => {
  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    // Set token
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;
    if(_token){
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then(user=>{
        dispatch({
          type: "SET_TOKEN",
          user:   user,
        });
        console.log("user",user);
      })
    }
  }, []);

  return (
    <div className="App">
      Music App
      {
        token ? <Player /> : <Login />
      }
      
    </div>
  );
}

export default App;
