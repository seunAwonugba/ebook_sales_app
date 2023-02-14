import "./App.css";
import React from "react";
import Home from "./pages/Home";
import NavBar from "./navbar/NavBar";
import Success from "./pages/Success";
function App() {
    let component;
    switch (window.location.pathname) {
        case "/":
            component = <Home />;
            break;

        case "/success":
            component = <Success />;
            break;

        default:
            break;
    }
    return (
        <>
            <NavBar />
            <div className="container">{component}</div>
        </>
    );
}

export default App;
