import { useState } from "react"
import "./App.css"

const Modal =(props) =>{ // 분리
  const {name, nickname, email} = props
  return (
  <div id = "modal">입력한 값은 <span style= {{color : "red"}}>{name}{nickname}{email}</span>입니다.</div> //조건부 렌더링 삼항표기법 &&로도 참 거짓으로 보이는 것도 가능
  )
}


function App() {
  const rezero = (e) =>{
    setInputs({
      name : "",
      nickname : "",
      email : ""
    });
  }
  let [input, setInput] = useState('');
  let [inputs, setInputs] = useState({
    name : "",
    nickname : "",
    email : ""
  })
  const {name, nickname, email} = inputs;
  return (
    <div className="Wrapper">
    <form method="GET" action="">
      <input value={name} name="name" placeholder="이름을 입력하세요" type="text" onChange={(e)=> {setInputs({...inputs, [e.target.name] : e.target.value})}} />
      <input value={nickname} name="nickname" placeholder="닉네임을 입력하세요" type="text" onChange={(e)=> {setInputs({...inputs, [e.target.name] : e.target.value})}} />
      <input value={email} name="email" placeholder="이메일을 입력하세요" type="text" onChange={(e)=> {setInputs({...inputs, [e.target.name] : e.target.value})}} />
      <p />
      <button type="submit" onClick={() => alert({name} + "입력이 완료되었습니다.")}>등록</button>
    </form>
    
    <button onClick={rezero}>초기화</button>
    <hr />
    <br></br>
    {/* {input ? <div id = "modal">입력한 값은 <span style= {{color : "red"}}>{props.text}</span>입니다.</div>*/}
    {name ? <Modal name = {name} nickname = {nickname} email = {email} />
    : null}
  </div>
  )
}

export default App
