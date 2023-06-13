import logo from './logo.svg';
import React from 'react';
import { Signup } from './components/Signup';
import { Signin } from './components/Signin';
import { Home } from './components/Home';
import { ForgetPassword } from "./components/ForgetPassword";
import { NewSubmit } from './components/NewSubmit';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />}> </Route>
          <Route path="/signin" element={<Signin />}> </Route>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/forget-pass" element={<ForgetPassword />}> </Route>
          <Route path="/otp" element={<NewSubmit />}> </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
