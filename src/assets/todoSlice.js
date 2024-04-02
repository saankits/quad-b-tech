import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todolist : [
        {
            id:1,
            task:"abc",
            completed:"complete"
        },
        {
            id:2,
            task:"abnm,m.bcd",
            completed:"incomplete"
        },
        {
            id:3,
            task:"kjhjlkc",
            completed:"complete"
        },
        
    ]
}

const todoslice = createSlice({
    name:"tododata",
    initialState,
    reducers : {
        addlist : (state, action) => {
            state.todolist = action.payload
        },
        deleteItem : (state,action) => {
            state.todolist.splice(action.payload,1)
        }
    }
})

export const {addlist,deleteItem} = todoslice.actions
export default todoslice.reducer