import { createSlice} from '@reduxjs/toolkit'
import {apicalls} from '../Actions/Actions'
import { toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const todo  = createSlice({
    name:'todo',
    initialState:{
        todos:[],
    },
    reducers:{
        GetFromResponse:(state,action)=>{
            state.todos = action.payload

        },
        TodoSaved: (state,action)=>{
            state.todos.unshift(action.payload)

            toast.success('Malumot Saqlandi')
        },
        EditTodo:(state,action)=>{
            state.todos.map((item,index) => {
                if(item.id===action.payload.id)
                    item.name=action.payload.name
                item.body=action.payload.body
                item.email=action.payload.email
            })
            toast.success('Malumot uzgartirildi')

        },
        DeleteTodo:(state,action)=>{

        }
    },
})
//action
export const GetTodo =()=> apicalls({
    url:'/todos',
    method:'get',
    successtype:todo.actions.GetFromResponse.type
})
export const SaveTodo =(data)=> apicalls({
    url:'/todos',
    method:'post',
    data,
    successtype:todo.actions.TodoSaved.type
})
export const EditTodo =(data)=> apicalls({
    url:'/todos/' +data.id,
    method:'put',
    data,
    successtype:todo.actions.EditTodo.type
})
export const DeleteTodo =(data)=> apicalls({
    url:'/todos/' +data,
    method:'delete',
    successtype:todo.actions.DeleteCTodo.type
})

export default todo.reducer

