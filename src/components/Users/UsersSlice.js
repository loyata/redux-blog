import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk('users/fetchUsers', async ()=>{
    const users = await axios.get("https://jsonplaceholder.typicode.com/users")
    return users.data;
})


export const usersSlice = createSlice({
    name:'users',
    initialState: [
        {id:'0', name:'Alice'},
        // {id:'1', name:'Bob'}
    ],
    reducers:{

    },
    extraReducers(builder){
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
           // return action.payload
           //  console.log(action.payload)
            for(let x of action.payload) state.push(x)
        })
    }

})

export const {} = usersSlice.actions;
export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;