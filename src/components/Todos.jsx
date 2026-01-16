import { useSelector } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";
import { markAsDone } from "../features/todo/todoSlice";
import '../components/Todos.css'

function Todos(){
    let todos=useSelector((state)=>state.todos);
    console.log(todos);
    const dispatch=useDispatch();

    let deleteTask=(id)=>{
        dispatch(deleteTodo(id));
        console.log(id)
    }
    let markDone=(id)=>{
        dispatch(markAsDone(id));
        console.log(id);
    }
    return(
        <>
            {todos.map((todo)=>{
               return <li key={todo.id} style={{ textDecoration: todo.isDone ? "line-through" : "none" }}>{todo.task}<button onClick={()=>(markDone(todo.id))}>Done</button><button onClick={()=>(deleteTask(todo.id))}>Delete</button></li>
            })}
        </>
    )
}

export default Todos;