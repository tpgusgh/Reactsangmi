import { useState } from "react";
import "./Event.css"

function Event(){
    const [name, Setname] = useState(true);
    return(
        <div className="name-container">
            <h1 className="name-header">현재이름: {name ? "소마고" : "이름이 없습니다"}</h1>
            <button className="name-button" onClick={ ()=> (Setname(!name))}>{name ? "이름 숨기기" : "이름 보이기"}</button>
        </div>
    );
}

export default Event;