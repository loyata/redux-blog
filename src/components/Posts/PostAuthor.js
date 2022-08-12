import React from 'react';
import {useSelector} from "react-redux";


const PostAuthor = ({userId}) => {

    //注意, find是找到第一个, 要找到所有的使用filter
    const user = useSelector(state => state.users.find(user => user.id === userId))
    // console.log(user)

    return (
        <span>
            by {user? user.id:"Unknown"}
        </span>
    );
};

export default PostAuthor;