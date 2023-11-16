import React from "react";

function Navbar(props) {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <p className="navText">Cat Memorization Game</p>
                <p className="navText">Try your best to click each cat once!</p>
                <p className="navText">Score: {props.score} | Hiscore: {props.hiscore}</p>
            </div>
        </nav>
    );
}

export default Navbar;