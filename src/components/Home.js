// src/components/Home.js
import React from "react";
import { username, city } from "../data/user";  // Named imports

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
      <p>{username}</p>
      <p>{city}</p>
    </div>
  );
}

export default Home;
