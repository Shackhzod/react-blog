import React from "react";
import {connect} from 'react-redux'
import { GetPosts,SavePosts,EditPosts,DeletePosts} from "../../Store/redux/PostReducer";
import {useEffect,useState} from 'react'
import PageModal from "./PageModal";

function PostPage({posts,GetPosts,SavePosts,EditPosts,DeletePosts}) {

const [isModal,setModal] = useState(false)
const [CurrentItem,setCurrent] = useState('')


    useEffect(()=>{
        GetPosts()
    },[])



    function toggleModal() {
    setCurrent('')
    setModal(prev=>!prev)

    }

    function SavePost(event,values) {
        if (CurrentItem) {
            EditPosts({...values,id:CurrentItem.id })
        }
        else{
        SavePosts(values)
        }

        toggleModal()
    }


    function HandledEdit(item) {
   setModal(true)

    setCurrent(item)

    }



    return(
        <div className={'col-md-10 offset-1 bg-dark  mt-4'}>
            <button className={'btn btn-outline-warning float-end mx-5 my-3'} onClick={toggleModal}>Add</button>

            <table className={'table text-white'}>
                <tr>
                    <th>N</th>
                    <th>TITLE</th>
                    <th>BODY</th>
                    <th> </th>
                </tr>
                <tbody>
                {
                    posts.map((item,index)=><tr key={item.id} className={'p-3'}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.body}</td>
                          <td> <button onClick={()=>HandledEdit(item)} className={'btn btn-primary my-1'}> edit</button>
                              <button className={'btn btn-outline-danger'} onClick={()=>DeletePosts(item.id)}> delete</button> </td>
                    </tr>)
                }

                </tbody>
            </table>
            <PageModal
             isopen={isModal}
             toggle={toggleModal}
              save={SavePost}
             current={CurrentItem}
            />

        </div>
    )

}


export default connect(
    ({post:{posts}}) => ({posts}),{GetPosts,SavePosts,EditPosts,DeletePosts})
(PostPage)
