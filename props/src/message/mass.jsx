import "./mss.css"

function Message1(props){
    const {msg} = props;
    return(
        <div className="wrapper">
            {msg}
        </div>
    );
}


export default Message1;