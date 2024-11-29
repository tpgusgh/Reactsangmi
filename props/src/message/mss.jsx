import "./mss.css";
import React, { useState } from "react";
import Message1 from "./mass";
import youtuImage from './youtu.png';
import "../message.css"
function Pictures(){
    return(
        <img src={youtuImage} alt="YouTube logo" style={{ width: '1500px', height: 'auto' }}  />
    );
}

function Mss() {
    const [msgLists, setMsgLists] = useState([
        "와 엄청 안좋아졌네",
        "아 너프는 좀..",
        "이게 맞아?"
    ]);

    const [inputValue, setInputValue] = useState(''); // 입력값 상태

    // 입력값 변경 핸들러
    const handleInputChange = (e) => {
        setInputValue(e.target.value); // 입력값 업데이트
    };

    // 새 메시지 추가 핸들러
    const handleAddMessage = () => {
        if (inputValue.trim() === "") {
            alert("메시지를 입력하세요."); // 빈 값 방지
            return;
        }

        // 새로운 메시지를 리스트에 추가
        setMsgLists([...msgLists, inputValue]);
        setInputValue(''); // 입력값 초기화
    };


    return (
        <div className="wrapper">
            <Pictures />
            <br></br>

            {/* 메시지 리스트 출력 */}
            {msgLists.map((item, index) => (
                <Message1 key={index} msg={item} />
            ))}
            <input 
                type="text" 
                value={inputValue} 
                onChange={handleInputChange} // 입력값 변경 핸들러
                placeholder="메시지를 입력하세요" 
            />
            <button onClick={handleAddMessage}>전송</button>
        </div>
    );
}

export default Mss;
