import React, { useState, useEffect, useContext } from "react";
import logo from './logo.svg';
import './App.css';
import Login from '../src/login/login';
import Menu from './menu/menu';
import UserContext from './login/user-context';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./home/home-page";
import AboutPage from "./about/about";
import SettingPage from "./setting/setting";
import AdminPage from "./admin/admin";



function App() {

  const initState = {
    userInfo:{
      user: "",
      isAdmin: false
    }
  } 

  const [state, setState] = useState(initState)

  const setUserContext = (value: any) =>{
    setState({userInfo: value});
  }
  return (
     <UserContext.Provider value={state.userInfo}>
      <Router>
    <div className="App">
       
          <Route path="/" exact render={() =>{
            return(<Login setUserContext={setUserContext}/>);
          }}/>
          
          <Route path="/adminpanel" exact  component={AdminPage}/>

          <Route path="/homepage" exact  component={HomePage}/>

          <Route path="/about" exact  render={() => {
              return(<AboutPage/>);
           }}/>

          <Route path="/setting" exact  render={() => {
              return(<SettingPage/>);
           }}/>
       
    </div>
    </Router>
    </UserContext.Provider>
  );
}

export default App;