import { createSlice} from '@reduxjs/toolkit'
import {apicalls} from '../Actions/Actions'
import { toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const user  = createSlice({
    name:'user',
    initialState:{
        users:[],
    },
    reducers:{
        GetFromResponse:(state,action)=>{
            state.users = action.payload

        },
        UserSaved: (state,action)=>{
            state.users.unshift(action.payload)

            toast.success('Malumot Saqlandi')
        },
        EditUser:(state,action)=>{
            state.users.map((item,index) => {
                if(item.id===action.payload.id)
                    item.name=action.payload.name
                item.body=action.payload.body
                item.email=action.payload.email
            })
            toast.success('Malumot uzgartirildi')

        },
        DeleteUser:(state,action)=>{

        }
    },
})
//action
export const GetUser =()=> apicalls({
    url:'/users',
    method:'get',
    successtype:user.actions.GetFromResponse.type
})
export const SaveUser =(data)=> apicalls({
    url:'/users',
    method:'post',
    data,
    successtype:user.actions.UserSaved.type
})
export const EditUser =(data)=> apicalls({
    url:'/users/' +data.id,
    method:'put',
    data,
    successtype:user.actions.EditUser.type
})
export const DeleteUser =(data)=> apicalls({
    url:'/users/' +data,
    method:'delete',
    successtype:user.actions.DeleteCUser.type
})

export default user.reducer

