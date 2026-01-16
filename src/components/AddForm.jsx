import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import '../components/AddForm.css'

export default function AddForm(){
    let [task,setTask]=useState("");
    const dispatch=useDispatch();

    let handleSubmit=(evt)=>{
      evt.preventDefault();
      console.log(task);
      dispatch(addTodo(task));
    }
    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <h1>TO-Do App</h1>
                <input type="text" onChange={(e)=>setTask(e.target.value)}/>
                <button>Add</button>
            </form>
        </>
    )
}