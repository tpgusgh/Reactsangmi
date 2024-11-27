import "./mss.css";
import React, { useState } from "react";
import Message1 from "./mass";

function Mss() {
    const [msgLists, setMsgLists] = useState([
        "안녕하세요. 오늘의 일정입니다.",
        "점심시간이 11시 30분으로 변경되었습니다.",
        "이제 곧 회의가 시작됩니다."
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
        <div>
            <h1>Message 컴포넌트</h1>
            <input 
                type="text" 
                value={inputValue} 
                onChange={handleInputChange} // 입력값 변경 핸들러
                placeholder="메시지를 입력하세요" 
            />
            <button onClick={handleAddMessage}>전송</button>

            {/* 메시지 리스트 출력 */}
            {msgLists.map((item, index) => (
                <Message1 key={index} msg={item} />
            ))}
        </div>
    );
}

export default Mss;
