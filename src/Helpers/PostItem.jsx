import {ChatTeardropDots, ShareNetwork} from "phosphor-react";
import {Link} from "react-router-dom";

function PostItem({id, title, author, comments, shares}) {
    return (
        <li>
            <Link to={`/posts/${id}`}>
                <strong>{title}</strong> ({author})<br/>
                <ChatTeardropDots size={16}/> {comments} reacties –{" "}
                <ShareNetwork size={16}/> {shares} keer gedeeld
            </Link>
        </li>
    );
}

export default PostItem;
