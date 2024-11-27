import { useState } from "react";
import "./message.css"


function Message(props){
    

    return(
        <div className="wrapper">
            <img
            className="image"
            src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
            />
            
            <div className="container">
                <span
                className="nameText"
                style={{color:"skyblue", fontWeight:"bold"}}
                >
                    {props.name}
                </span>
                <span className="commentText">{props.comment}</span>
            </div>
        </div>
    );
}



export default Message;