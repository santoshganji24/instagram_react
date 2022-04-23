import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Tab2 from "./components/Tab2";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <hr />
      <div className="container">
        <Profile />
        {/* <Tab /> */}
        <Tab2 />
      </div>
      <Footer />
    </div>
  );
}
