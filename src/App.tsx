import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./screen/Home";
import Login from "./screen/Login";
import Protected from "./screen/Protected";
import Register from "./screen/Register";
import LoginRoute from "./util/LoginRoute";
import PrivateRoute from "./util/PrivateRoute";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <LoginRoute>
                <Home />
              </LoginRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PrivateRoute>
                <Login />
              </PrivateRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PrivateRoute>
                <Register />
              </PrivateRoute>
            }
          />
          <Route
            path="/proctected"
            element={
              <LoginRoute>
                <Protected />
              </LoginRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
