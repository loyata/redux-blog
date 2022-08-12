import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {selectAllPosts, selectAllStatus, selectAllError, fetchPosts} from "./postsSlice";
import PostExcerpt from "./PostExcerpt";

function Posts() {

    const dispatch = useDispatch();

    const posts = useSelector(selectAllPosts)
    const postsStatus = useSelector(selectAllStatus)
    const postsError = useSelector(selectAllError)


    useEffect(()=>{
        if(postsStatus === 'idle') {
            dispatch(fetchPosts());
        }
    },[postsStatus, dispatch])

    let content;
    if(postsStatus === 'loading') content = (<p>Loading...</p>)
    else if(postsStatus === 'succeeded'){
            const sortedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date))
            content = sortedPosts.map((post) => (<PostExcerpt post={post} key={post.id}/>
        ))
    }else if(postsStatus === 'error'){
        content = (<p>{postsError}</p>)
    }




    return (
        <section>
            <h2>Posts</h2>
            {content}
        </section>
    );
}

export default Posts;