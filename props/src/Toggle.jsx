import { useState } from "react"
import './Toggle.css'

function 토글(){
    const [isToggled, setIsToggled] = useState(false);
    const toggle = () =>{
        setIsToggled(!isToggled);
    }
    return(
        <div className="toggle-container">
            <h1>Toggle <span className="toggle-header">토글이 {isToggled ? "On" : "Off"}</span></h1>
            
            <button className="toggle-button" onClick={toggle}>Toggle</button>
        </div>
    );
}


export default 토글;