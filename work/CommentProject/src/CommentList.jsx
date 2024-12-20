import Comment from "./Comment"
import "./newcomments.js"
import newcomments from "./newcomments.js";
export default function CommentList(){
    return(
        <div>
            <Comment name="sdsd" content="sdd" />
            {
                newcomments.map(function(comment){
                    return(
                        <div>
                            <Comment name={comment.name} content={comment.comment} />
                        </div>
                    );
                })
            }
        </div>
    )
}