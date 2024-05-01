import logo from './logo.svg';
import './App.css';
import React from 'react';
import ThemeSwitcher from "./ThemeSwitcher"
import "./Theme.css"
import { useSelector } from 'react-redux';


function App() {
  const theme = useSelector((state) => state.theme);
  return (
    <div>
        <ThemeSwitcher />
        <h1 className={`${theme}`}>Hello hello hello</h1>
    </div>
  );
}


export default App;
