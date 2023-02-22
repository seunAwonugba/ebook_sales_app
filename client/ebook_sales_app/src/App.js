import "./App.css";
import React from "react";
import Home from "./pages/Home";
import NavBar from "./navbar/NavBar";
import Success from "./pages/Success";
import { Route, Routes } from "react-router-dom";
import Failed from "./pages/Failed";
import { ToastContainer } from "react-toastify";
function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/success" element={<Success />} />
                <Route path="/failed" element={<Failed />} />
            </Routes>
            <ToastContainer theme="colored" pauseOnFocusLoss />
        </>
    );
}

export default App;
