import {createSlice, nanoid, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {sub} from "date-fns";

const postsURL = "https://jsonplaceholder.typicode.com/posts"

//promise
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async ()=>{
    const response = await axios.get(postsURL);
    // console.log(response)
    return response.data;
})

export const addNewPosts = createAsyncThunk('posts/addNewPosts', async (initalPost)=>{
    const response = await axios.post(postsURL, initalPost);
    console.log(response)
    return response.data

})

export const postsSlice = createSlice({
    name:'posts',
    initialState:{
        posts:[
            // {
            // id:'134567',
            // title:'Learn Redux Toolkit',
            // content: "I've heard great things.",
            // userId:'',
            // date:sub(new Date(), {minutes: 10}).toISOString(),
            // reactions:{
            //     thumbsUp: 0,
            //     wow: 0,
            //     heart: 0,
            //     rocket: 0,
            //     coffee: 0
            //     }
            // }
        ],
        status:'idle',
        error: null
    },
    reducers:{
        addPostForm:{
            reducer:(state, action) => {
                console.log(state.posts)
                state.posts.push(action.payload);
            },
            prepare:(input) => {
                return {payload: {id: nanoid(), title:input.title, content: input.content, userId: input.userId, date:new Date().toISOString(),
                        reactions:{
                        thumbsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0
                    }
                }
                }
            }
        },
        reactionAdd:(state, action) => {
            const {postId, reaction} = action.payload;
            const existingPost = state.posts.find(post => post.id === postId)
            if(existingPost) existingPost.reactions[reaction]++;
        }
    },
    extraReducers(builder){
        builder // 处理axios返回的promise
            .addCase(fetchPosts.pending, (state, action) => {
            state.status = 'loading';
        })
            .addCase(fetchPosts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            // let min = 1;
            const loadPosts = action.payload.map(post => {
                post.id = nanoid()
                post.date = new Date().toISOString()
                post.reactions = {
                        thumbsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0
                    }
                    return post;
            })
            state.posts = state.posts.concat(loadPosts);
        })
            .addCase(fetchPosts.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
            .addCase(addNewPosts.fulfilled, (state, action) => {
                const newPost = action.payload;
                newPost.userId = Number(newPost.userId)
                newPost.date = new Date().toISOString();
                newPost.reactions = {
                        thumbsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0
                    }

                    state.posts.push(newPost)
            })
    }
})

export const {addPostForm, reactionAdd} = postsSlice.actions;

export const selectAllPosts = (state) => state.posts.posts;
export const selectAllStatus = (state) => state.posts.status;
export const selectAllError = (state) => state.posts.error;
export const selectPostById = (state, id) => state.posts.find(post => id === post.id)

export default postsSlice.reducer;