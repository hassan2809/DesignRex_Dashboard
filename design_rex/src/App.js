import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Calender,
  Sidebar,
  Customers,
  Navbar,
  Dashboard,
} from "./components/index";

import { useStateContext } from "./contexts/ContextProvider.js";

import "./App.css";

const App = () => {
  const { activeMenu } = useStateContext();

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          {activeMenu ? (
            <div className="w-72 fixed dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg w-full">
              <Navbar />
            </div>
            <Routes>
              <Route path="/customers" element={<Customers />} />
              <Route path="/" element={<Dashboard />} />
              <Route path="/calander" element={<Calender />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
