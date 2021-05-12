import React from "react";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar.js";
import Favorites from "./components/notes/Favorites";
import NoteDetail from "./components/notes/NoteDetail";
import EditNote from "./components/notes/EditNote";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/note/:id" component={NoteDetail} />
        <Route path="/edit/:id" component={EditNote} />
      </Switch>
    </Router>
  );
}

export default App;
