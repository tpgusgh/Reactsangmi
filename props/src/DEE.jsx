function DEE(){
    const amsg = [
        "허동운",
        "윤도훈",
        "허온"
    ];
    const user = {
        id : 1,
        name : '박가이',
    }
    const userAdd = {
        ...user,
        email : "kimhyunhi1@gmail.com",
    }
    console.log(userAdd);
    let newmsg = [...amsg,"출석 끝"];
    let abc = newmsg.filter((item) => item == "허동운")
    return (
        <div>
            {
                newmsg.map((item) => {return <li>{item}</li>})
                
            }
            <p>필터 거친거</p>
            {
                abc.map((item) => {return <li>{item}</li>})
            }
            <p>map 안에 필터</p>
            {
                newmsg.map((item) => {return item === "허동운" ? (<li>{item}</li>) : (<></>)})
            }
        </div> 
    );
}



export default DEE;

