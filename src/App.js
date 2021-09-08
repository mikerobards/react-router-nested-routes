import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Profile from "./pages/profile/Profile"
import Info from "./pages/profile/Info"
import ProfileSettings from "./pages/profile/Settings"

import { Switch, Route } from "react-router-dom"

import './App.css';

function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/profile/info">
          <Info />
        </Route>
        <Route path="/profile/settings">
          <ProfileSettings />
        </Route>
      </Switch>

      <Footer />
    </div>

  );
}

export default App;
