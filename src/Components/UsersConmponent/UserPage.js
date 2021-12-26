import React from "react";
import {connect} from 'react-redux'
import { GetUser,SaveUser,EditUser,DeleteUser} from "../../Store/redux/UserReducer";
import {useEffect,useState} from 'react'
import UserModal from "./UserModal";

function UserPage({users,GetUser,SaveUser,EditUser,DeleteUser}) {

    const [isModal,setModal] = useState(false)
    const [CurrentItem,setCurrent] = useState('')

    useEffect(()=>{

        GetUser()

    },[])

    function toggleModal() {
        setCurrent('')
        setModal(prev=>!prev)

    }

    function Saveuser(event,values) {
        if (CurrentItem) {
            EditUser({...values,id:CurrentItem.id })
        }
        else{
            SaveUser(values)
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
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th> </th>
                </tr>
                <tbody>
                {
                    users.map((item,index)=><tr key={item.id} className={'p-3'}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{item.address.city}</td>
                        <td>
                            <input type="checkbox" defaultChecked={item.completed}/>
                        </td>
                        <td> <button onClick={()=>HandledEdit(item)} className={'btn btn-primary my-1'}>edit</button>
                            <button className={'btn btn-outline-danger'} onClick={()=>DeleteUser(item.id)}> delete</button> </td>
                    </tr>)
                }

                </tbody>
            </table>
            <UserModal
                isopen={isModal}
                toggle={toggleModal}
                save={Saveuser}
                current={CurrentItem}
            />
        </div>
    )

}
export default connect(
    ({user:{users}}) => ({users}),{GetUser,SaveUser,EditUser,DeleteUser})
(UserPage)