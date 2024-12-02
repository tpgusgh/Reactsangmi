import { useState } from "react";

function InputText2(){
    const Auser = {
        id: 0,
        name : '김태현',
        email : 'hyunho@gmail.com',
    };
    const userAdd = {
        ...Auser,
        email : 'tea@gmail.com',
    };
    console.log(userAdd);
    const [user, setUser] = useState(Auser);
    return(
        <div>
            <input 
            type="text"
            onChange={
                (e) => setUser({
                    ...Auser,
                    name : e.target.value,
                }
            )
            } value={user.name} />
        </div>
    );
}


export default InputText2;