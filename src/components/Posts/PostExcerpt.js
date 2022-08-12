import React from 'react';
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deletePosts} from "./postsSlice";

const PostExcerpt = ({post}) => {

    const dispatch = useDispatch();

    return (
        <div>
            <article key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <p className="postCredit">
                    <PostAuthor userId={post.userId}/>
                    <TimeAgo timeStamp={post.date}/>
                </p>
                <ReactionButtons id={post.id}/>
                <Link to={`posts/${post.id}`}>View Post</Link> {''}
                <div style={{color:"purple", textDecoration:"underline", cursor:"pointer"}} onClick={()=>{dispatch(deletePosts(post))}}>Delete Post</div>
                {/*<button onClick={()=>{dispatch(deletePosts(post))}}>Delete Post</button>*/}
            </article>
        </div>
    );
};

export default PostExcerpt;