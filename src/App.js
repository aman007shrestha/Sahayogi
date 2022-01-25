import React, { useState, useContext } from "react";
import "./App.css";
// import { MetaMaskProvider } from "metamask-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Pages
import About from "./pages/About";
import Home from "./pages/Home";
import Donate from "./pages/Donate";
import Beneficiary from "./pages/Beneficiary";
import Vendor from "./pages/Vendor";
import Logout from "./pages/Logout";
import Login from "./pages/Login";
// components
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

//  Context API for the data throughout the app
export const DetailContext = React.createContext();

const App = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  const [notification, setNotification] = useState(false);
  return (
    // <MetaMaskProvider>
    <DetailContext.Provider
      value={{ notification, setNotification, loginStatus, setLoginStatus }}
    >
      <div className="App">
        <Router>
          <div className="pageBody">
            <Navbar className="pageBody1" />
            <div className="pageBody2">
              <Sidebar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="/Beneficiary" element={<Beneficiary />} />
                <Route path="/Vendor" element={<Vendor />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </div>
          </div>
        </Router>
      </div>
    </DetailContext.Provider>

    // </MetaMaskProvider>
  );
};

export default App;
