import React from 'react';
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostExcerpt = ({post}) => {
    return (
        <div>
            <article key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <p className="postCredit">
                    <PostAuthor userId={post.userId}/>
                    <TimeAgo timeStamp={post.date}/>
                </p>
                <ReactionButtons id={post.id}/>
            </article>
        </div>
    );
};

export default PostExcerpt;