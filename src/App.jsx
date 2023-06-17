import React from "react";
import "./App.css";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import LandingPage from "./components/LandingPage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<LandingPage />} />
          <Route path="login" element= {<Login />} />
          <Route path="/register" element= {<Register />} />
        </Routes>
      </BrowserRouter>
     
    </div>
  );
};

export default App;
