import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Explore from "./Pages/Explore";
import Notifications from "./Pages/Notifications";
import Messages from "./Pages/Messages";
import Bookmarks from "./Pages/Bookmarks";
import Lists from "./Pages/Lists";
import Profile from "./Pages/Profile";

function App() {
  return (
    <HashRouter>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
          <Route path="/notifications">
            <Notifications />
          </Route>
          <Route path="/messages">
            <Messages />
          </Route>
          <Route path="/bookmarks">
            <Bookmarks />
          </Route>
          <Route path="/lists">
            <Lists />
          </Route>
          <Route path="/brice_suazo">
            <Profile />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
