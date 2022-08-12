import React, {useState} from 'react';
import {editPosts, selectAllPosts} from "./postsSlice";
import {useDispatch, useSelector} from "react-redux";
import {useParams, useNavigate} from "react-router-dom";

const EditPostForm = () => {

    const {id} = useParams();
    const post = useSelector(selectAllPosts).find(post => post.id == id)

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector(state => state.users)
    const [input, setInput] = useState({title:post.title, body:post.body, userId:post.userId, id:post.id});

    const [submitStatus, setSubmitStatus] = useState('idle');
    const canSave = [input.title, input.body, input.userId].every(Boolean) && submitStatus === 'idle';
    const onSavePostClicked = () => {
        if(canSave){
            try {
                setSubmitStatus('pending');
                dispatch(editPosts(input));
                setInput({title:'', body:'', userId:''});
                navigate('/')
            }catch (e){
                alert("Illegal input!");
            }finally {
                setSubmitStatus('idle');

            }
        }
    }
    const usersOptions = users.map(user => (<option key={user.id} value={user.id}>{user.name}</option>))

    return (
        <section>
            <h2>Add a post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={input.title}
                    onChange={(e)=>{setInput({...input, title:e.target.value})}}
                />
                <label htmlFor="postAuthor">Author:</label>
                <select id="postAuthor" value={input.userId} onChange={(e)=>{setInput({...input, userId: e.target.value})}}>
                    {/*<option value="none" selected hidden>Please make a selection</option>  */}
                    <option value="">{''}</option>
                    {usersOptions}
                </select>
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={input.body}
                    onChange={(e)=>{setInput({...input, body:e.target.value})}}
                />
                <button
                    type="button"
                    onClick={onSavePostClicked}
                    disabled={!canSave}
                >Save Post</button>
            </form>
        </section>
    );
};

export default EditPostForm;