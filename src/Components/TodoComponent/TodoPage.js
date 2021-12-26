import React from "react";
import {connect} from 'react-redux'
import { GetTodo,SaveTodo,EditTodo,DeleteTodo} from "../../Store/redux/TodoReducer";
import {useEffect,useState} from 'react'
import TodoModal from "./TodoModal";

function TodoPage({todos,GetTodo,SaveTodo,EditTodo,DeleteTodo}) {

    const [isModal,setModal] = useState(false)
    const [CurrentItem,setCurrent] = useState('')


    useEffect(()=>{

        GetTodo()

    },[])



    function toggleModal() {
        setCurrent('')
        setModal(prev=>!prev)

    }

    function SaveTodos(event,values) {
        if (CurrentItem) {
            EditTodo({...values,id:CurrentItem.id })
        }
        else{
            SaveTodo(values)
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
                    <th>title</th>
                    <th>complete</th>
                    <th> </th>
                </tr>
                <tbody>
                {
                    todos.map((item,index)=><tr key={item.id} className={'p-3'}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>
                            <input type="checkbox" defaultChecked={item.completed}/>
                        </td>
                        <td> <button onClick={()=>HandledEdit(item)} className={'btn btn-primary my-1'}>edit</button>
                            <button className={'btn btn-outline-danger'} onClick={()=>DeleteTodo(item.id)}> delete</button> </td>
                    </tr>)
                }

                </tbody>
            </table>
            <TodoModal
                isopen={isModal}
                toggle={toggleModal}
                save={SaveTodos}
                current={CurrentItem}
            />
        </div>
    )

}


export default connect(
    ({todo:{todos}}) => ({todos}),{GetTodo,SaveTodo,EditTodo,DeleteTodo})
(TodoPage)
