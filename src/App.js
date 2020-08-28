import React, { useEffect, useState } from "react";
import Login from "./Login";
import { getTokenFromResponse } from "./spotify";
const  App = () => {
  const [token, setToken] = useState(null);
  useEffect(() => {
    // Set token
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;
    if(_token){
      setToken(_token);
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
