import React from 'react';
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import {useSelector} from "react-redux";
import {selectPostById} from "./postsSlice";



const SinglePost = ({id}) => {

    const post = useSelector(state => selectPostById(state, id));

    if(!post) return (<section><h2>Page not found</h2></section>)

    return (

        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p className="postCredit">
                <PostAuthor userId={post.userId}/>
                <TimeAgo timeStamp={post.date}/>
            </p>
            <ReactionButtons id={post.id}/>
        </article>

    );
};

export default SinglePost;