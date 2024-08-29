import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import User from "./pages/User";
import Artist from "./pages/Artist";
import Song from "./pages/Song";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/*"
          element={
            <Sidebar>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/user" element={<User />} />
                <Route path="/artist" element={<Artist />} />
                <Route path="/songs" element={<Song />} />
              </Routes>
            </Sidebar>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
