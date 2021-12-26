import { createSlice} from '@reduxjs/toolkit'
import {apicalls} from '../Actions/Actions'
import { toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const post  = createSlice({
    name:'post',
    initialState:{
        posts:[],
    },
    reducers:{
       GetFromResponse:(state,action)=>{
          state.posts = action.payload

       },
        PostSaved: (state,action)=>{
           state.posts.unshift(action.payload)

           toast.success('Malumot Saqlandi')
        },
        EditPost:(state,action)=>{
             state.posts.map((item,index) => {
                 if(item.id===action.payload.id)
                     item.title=action.payload.title
                 item.body=action.payload.body
             })
            toast.success('Malumot uzgartirildi')

        },
        DeletePosts:(state,action)=>{

        }
    },
})
//action
export const GetPosts =()=> apicalls({
    url:'/posts',
    method:'get',
    successtype:post.actions.GetFromResponse.type
})
export const SavePosts =(data)=> apicalls({
    url:'/posts',
    method:'post',
    data,
    successtype:post.actions.PostSaved.type
})
export const EditPosts =(data)=> apicalls({
    url:'/posts/' +data.id,
    method:'put',
    data,
    successtype:post.actions.EditPost.type
})
export const DeletePosts =(data)=> apicalls({
    url:'/posts/' +data,
    method:'delete',
    successtype:post.actions.DeletePosts.type
})
export default post.reducer