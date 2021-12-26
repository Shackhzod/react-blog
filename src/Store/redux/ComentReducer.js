import { createSlice} from '@reduxjs/toolkit'
import {apicalls} from '../Actions/Actions'
import { toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const coment  = createSlice({
    name:'coments',
    initialState:{
        coments:[],
    },
    reducers:{
        GetFromResponse:(state,action)=>{
            state.coments = action.payload

        },
        ComentSaved: (state,action)=>{
            state.coments.unshift(action.payload)

            toast.success('Malumot Saqlandi')
        },
        EditComent:(state,action)=>{
            state.coments.map((item,index) => {
                if(item.id===action.payload.id)
                    item.name=action.payload.name
                item.body=action.payload.body
                item.email=action.payload.email
            })
            toast.success('Malumot uzgartirildi')

        },
        DeleteComent:(state,action)=>{

        }
    },
})
//action
export const GetComents =()=> apicalls({
    url:'/comments',
    method:'get',
    successtype:coment.actions.GetFromResponse.type
})
export const SaveComents =(data)=> apicalls({
    url:'/comments',
    method:'post',
    data,
    successtype:coment.actions.ComentSaved.type
})
export const EditComents =(data)=> apicalls({
    url:'/comments/' +data.id,
    method:'put',
    data,
    successtype:coment.actions.EditComent.type
})
export const DeleteComents =(data)=> apicalls({
    url:'/comments/' +data,
    method:'delete',
    successtype:coment.actions.DeleteComents.type
})

export default coment.reducer
