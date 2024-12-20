import "./Comment.css"

export default function Comment(props){
    return(
        <div>
            <div className="wrapper">
                <div className="imageContainer">
                    <img className="image"src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"/>
                </div>
                <div className="contentcontainer">
                    <span className="nameText">{props.name}</span>
                    <span className="contentontainer">{props.content}</span>
                </div>
            </div>
        </div>
    );
}

