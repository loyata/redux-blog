import React from 'react';
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";


const SinglePost = () => {

    const {id} = useParams();

    const post = useSelector(state => state.posts.posts.find(post => post.id == id))

    if(!post) return (<section><h2>Page not found</h2></section>)

    return (

        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p className="postCredit">
                <PostAuthor userId={post.userId}/>
                <TimeAgo timeStamp={post.date}/>
            </p>
            <ReactionButtons id={post.id}/>
            <Link to={`edit`}>Edit post</Link>
        </article>

    );
};

export default SinglePost;