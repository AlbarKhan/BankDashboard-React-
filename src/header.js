// import "./App";
import React from "react";
import { useState } from "react";
export default function Header({ children }) {
  return (
    <header>
      <nav className="navbar">{children}</nav>
    </header>
  );
}

export function Greetings({ currentUser }) {
  return (
    <div className="greetings">
      <p>{currentUser ? " Good Day " + currentUser.userName : "Login"}</p>
    </div>
  );
}

export function Logo() {
  return (
    <div className="logo">
      <img src="https://bankist.netlify.app/logo.png" alt="logo"></img>
    </div>
  );
}

export function LoginInput({ handleLogin }) {
  const [userId, setUserId] = useState(null);
  const [password, setPassword] = useState(null);
  return (
    <div className="login">
      <input
        className="user"
        placeholder="user"
        onChange={(e) => setUserId(e.target.value)}
      ></input>
      <input
        className="id"
        placeholder="id"
        onChange={(e) => setPassword(Number(e.target.value))}
      ></input>
      <i
        className="fa-solid fa-arrow-right"
        onClick={() => handleLogin(userId, password)}
      ></i>
    </div>
  );
}
