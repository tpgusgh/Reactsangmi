import { useState } from "react";

function InputText(){
    const [input, setinput] = useState("");
    const setInput = (e) =>{
        setinput(e.target.value);
    };
    const reset = (e) =>{
        setinput("");
    };
    return (
        <div>
            <input
            type="text"
            value={input}
            onChange={setInput}
            ></input>
            <button onClick={reset}>리셋</button>
            <h1>입력한 값은 {input} 입니다.</h1>
        </div>
    );
}

export default InputText;