import React from "react";
import {connect} from 'react-redux'
import { GetComents,SaveComents,EditComents,DeleteComents} from "../../Store/redux/ComentReducer";
import {useEffect,useState} from 'react'
import ComentModal from "./ComentModal";

function ComentPage({coments,GetComents,SaveComents,EditComents,DeleteComents}) {

    const [isModal,setModal] = useState(false)
    const [CurrentItem,setCurrent] = useState('')


    useEffect(()=>{

        GetComents()

    },[])



    function toggleModal() {
        setCurrent('')
        setModal(prev=>!prev)

    }

    function SaveComent(event,values) {
        if (CurrentItem) {
            EditComents({...values,id:CurrentItem.id })
        }
        else{
            SaveComents(values)
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
                    <th>name</th>
                    <th>email</th>
                    <th>body</th>
                    <th> </th>
                </tr>
                <tbody>
                {
                    coments.map((item,index)=><tr key={item.id} className={'p-3'}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.body}</td>
                        <td> <button onClick={()=>HandledEdit(item)} className={'btn btn-primary my-1'}> edit</button>
                            <button className={'btn btn-outline-danger'} onClick={()=>DeleteComents(item.id)}> delete</button> </td>
                    </tr>)
                }

                </tbody>
            </table>
            <ComentModal
                isopen={isModal}
                toggle={toggleModal}
                save={SaveComent}
                current={CurrentItem}
            />
        </div>
    )

}


export default connect(
    ({coment:{coments}}) => ({coments}),{GetComents,SaveComents,EditComents,DeleteComents})
(ComentPage)
