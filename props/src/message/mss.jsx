import "./mss.css"
import Message1 from "./mass";


function Mss(){
    const msgLists = ["안녕하세요. 오늘의 일정입니다.", 
                      "점심시간이 11시 30분으로 변경되었습니다.",
                      "이제 곧 회의가 시작됩니다."   
        ];
        return(
            <div>
                <h1>Message 컴포넌트</h1>
                <Message1 msg = {msgLists[0]} />
                <Message1 msg = {msgLists[1]} />
                <Message1 msg = {msgLists[2]} />
                {
                    msgLists.map((item) => {return <Message1 msg = {item} />})
                }
            </div>
        );
}

export default Mss;