import React from "react";
import abwtdots from "../assets/abwtdots.mp4"

const Main = () => {
return(
    <div className="main">
        <video src={abwtdots} autoPlay loop muted/>
    </div>
)
}

export default Main