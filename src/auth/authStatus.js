import React from "react";
import {
    useNavigate,
  } from "react-router-dom";

import { useAuth } from "./context";

export default function AuthStatus() {
    let auth = useAuth();
    let navigate = useNavigate();
  
    if (!auth.user) {
      return <p>You are not logged in.</p>;
    }

    function handleClick() {
      return auth.signout( () => navigate("/") )
    }
  
    return (
      <p>
        Welcome {auth.user}!{" "}
        <button onClick={handleClick}> Sign out </button>
      </p>
    );
  }