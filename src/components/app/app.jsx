import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import User from "../../pages/user";
import Admin from "../../pages/admin";
import AppHeader from "../app-header";
import "./app.css";

export default class App extends Component {
  render() {

    return (
      <Router>
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <AppHeader></AppHeader>
          <Routes>
            <Route path="/user" element={<User></User>} />
            <Route path="/admin" element={<Admin></Admin>} />
          </Routes>
        </div>
      </Router>
    );
  }
}
