import React, { useEffect, useState } from "react";
import Login from "./Login";
import { getTokenFromResponse } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();
const  App = () => {
  const [token, setToken] = useState(null);
  useEffect(() => {
    // Set token
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;
    if(_token){
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then(user=>{
        console.log("user",user);
      })
    }
  }, []);

  return (
    <div className="App">
      Music App
      {
        token ? <h1>Loged in </h1> : <Login />
      }
      
    </div>
  );
}

export default App;
