import React from "react";
import "./style.css";

function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <p className="navText">Cat Memorization Helper</p>
                <p className="navText">Try your best to click each cat once!</p>
                <p className="navText">Score/Topscore placeholder</p>
            </div>
        </nav>
    );
}

export default Navbar;