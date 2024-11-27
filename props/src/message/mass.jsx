import "./mss.css"
import React from 'react';

function Message1({ msg }) {
    return (
        <div className="wrapper">
            {msg}
        </div>
    );
}

export default Message1;