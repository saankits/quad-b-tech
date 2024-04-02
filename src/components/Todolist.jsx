import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Taskinput from './Taskinput'
import { addlist, deleteItem } from '../assets/todoSlice';

const Todolist = () => {
    const dispatch = useDispatch();
    const list = useSelector(state=>state.tododata.todolist)
    const [newtodo, setNewtodo] = useState({
        id:"",
        task:"",
        completed:"incomplete"
    })
    const handlenewtodo = (e) => {
        if(list.length == 0){
            let currId = 1;
            setNewtodo({...newtodo,id:currId,[e.target.name]:e.target.value})
        }
        else{
            let currId = list[list.length-1].id +1;
            setNewtodo({...newtodo,id:currId,[e.target.name]:e.target.value})
        }
       
        console.log(newtodo)
    }
    const handleAdd = (e) => {
    if(newtodo.task.length > 0){
        dispatch(addlist([...list,newtodo]))
        setNewtodo({
            id:"",
        task:"",
        completed:"incomplete"
        })
        alert("task added")
    }else{
        alert("Input field can not be empty while adding task")
    }
    }
    const deletetask = (ind) => {
        // let ind = data.findIndex(x=>x.id === id)
        dispatch(deleteItem(ind))
      }
        
    
  return (
    <div className='todo'>
        <h1>ToDo App</h1>
        <Taskinput newtodo={newtodo} handleAdd={handleAdd} handlenewtodo={handlenewtodo}/>
        <h2>Todo List</h2>
        {
            list.length> 0 ? <div className='list'>
                <span className="setsnt"></span>
                <span className='task'>Task</span><span className='snt'>Status</span><span className='action'>Actions</span>
            </div> : ""
        }
      {
        list.map((todo,ind)=>(
            <div className='list' key={ind}>
                <span className="task">{todo.task}</span>
                <span className='snt'>{todo.completed}</span>
                <span className="action"><i onClick={()=>deletetask(ind)} class="fa-solid fa-trash-can"></i></span>
            </div>
        ))
      }
    </div>
  )
}

export default Todolist
