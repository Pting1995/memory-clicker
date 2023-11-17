import React from "react";

function Navbar(props) {
    // console.log(props)
    return (
        < nav className="navbar navbar-dark bg-dark" >
            <div className="container-fluid">
                <p className="navText">Cat Memorization Game</p>
                <p className="navText">Try your best to click each cat once!</p>
                <p className="navText">Score: {props.scoreState.score} | Hiscore: {props.scoreState.highScore}</p>
            </div>
        </nav >
    );
}

export default Navbar;